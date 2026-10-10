"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { company, telHref } from "@/lib/site";
import Picture, { LOGO_VARIANTS } from "./Picture";
import { PhoneIcon } from "./icons";
import styles from "./Header.module.css";

const NAV = [
  { href: "#o-nas", label: "O nás" },
  { href: "#sluzby", label: "Služby" },
  { href: "#postup", label: "Jak to probíhá" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

const MENU_ID = "mobile-menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  // Solid/compact header once the page is scrolled.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Menu side effects: scroll lock, focus management, Esc / Tab trap.
  useEffect(() => {
    const root = document.documentElement;
    if (!open) {
      root.style.removeProperty("overflow");
      if (wasOpen.current) burgerRef.current?.focus({ preventScroll: true });
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    root.style.overflow = "hidden";
    const firstLink = menuRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menuRef.current || !burgerRef.current) return;
      const items = [burgerRef.current, ...menuRef.current.querySelectorAll<HTMLElement>("a")];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    // Close if the viewport grows to desktop while open.
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const headerClass = [styles.header, scrolled && styles.scrolled, open && styles.menuOpen]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClass}>
        <div className={`container ${styles.bar}`}>
          <a href="#top" className={styles.logo} aria-label="UA WELDING-KM, úvod" onClick={close}>
            <Picture
              base="/images/logo"
              variants={LOGO_VARIANTS}
              fallbackExt="png"
              alt="UA WELDING-KM s.r.o."
              width={165}
              height={52}
              sizes="(min-width: 1024px) 165px, 127px"
              eager
              imgClassName={styles.logoImg}
            />
          </a>

          <nav className={styles.nav} aria-label="Hlavní navigace">
            <ul className={styles.navList}>
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href={telHref} className={styles.phone}>
              <PhoneIcon size={20} className={styles.phoneIcon} />
              {company.phoneDisplay}
            </a>
            <a href="#kontakt" className={`btn btn--primary ${styles.cta}`}>
              Poptat zakázku
            </a>

            <a href={telHref} className={styles.iconBtn} aria-label={`Zavolat ${company.phoneDisplay}`}>
              <PhoneIcon size={22} />
            </a>
            <button
              ref={burgerRef}
              type="button"
              className={styles.burger}
              aria-expanded={open}
              aria-controls={MENU_ID}
              aria-label={open ? "Zavřít menu" : "Otevřít menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={styles.burgerBox} aria-hidden="true">
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Reserves the space of the fixed header (fixed so its shrink never shifts content). */}
      <div className={styles.spacer} aria-hidden="true" />

      <div
        id={MENU_ID}
        ref={menuRef}
        className={`${styles.menu} ${open ? styles.menuVisible : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className={`container ${styles.menuInner}`} aria-label="Mobilní navigace">
          <ul className={styles.menuList}>
            {NAV.map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <a href={item.href} className={styles.menuLink} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.menuFooter} style={{ "--i": NAV.length } as React.CSSProperties}>
            <a href={telHref} className={styles.menuPhone} onClick={close}>
              <PhoneIcon size={22} className={styles.phoneIcon} />
              {company.phoneDisplay}
            </a>
            <a href="#kontakt" className="btn btn--primary" onClick={close}>
              Poptat zakázku
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
