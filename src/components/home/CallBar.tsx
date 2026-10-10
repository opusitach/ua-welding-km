"use client";

import { useEffect, useState } from "react";
import { company, telHref } from "@/lib/site";
import { PhoneIcon } from "./icons";
import styles from "./CallBar.module.css";

/** Phone-only sticky call button; slides up once the hero has scrolled out of view. */
export default function CallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "0px 0px -20% 0px",
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ""}`} inert={!visible}>
      <a href={telHref} className={`btn btn--primary ${styles.btn}`}>
        <PhoneIcon size={22} strokeWidth={2} />
        Zavolat {company.phoneDisplay}
      </a>
    </div>
  );
}
