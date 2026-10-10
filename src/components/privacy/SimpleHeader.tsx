import Link from "next/link";
import Logo from "./Logo";
import styles from "./SimpleHeader.module.css";

/** Minimal header for secondary pages (privacy, 404): logo + back link. */
export default function SimpleHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" aria-label="UA WELDING-KM, úvod" className={styles.logo}>
            <Logo className={styles.logoPic} />
          </Link>
          <Link href="/" className={styles.back}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={styles.arrow}>
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            <span>Zpět na hlavní stránku</span>
          </Link>
        </div>
      </header>
      <div className={styles.stripe} aria-hidden="true" />
    </>
  );
}
