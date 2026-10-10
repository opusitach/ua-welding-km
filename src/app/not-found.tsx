import type { Metadata } from "next";
import Link from "next/link";
import SimpleHeader from "@/components/privacy/SimpleHeader";
import SimpleFooter from "@/components/privacy/SimpleFooter";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Stránka nenalezena | UA WELDING-KM",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <a href="#main" className="skip-link">
        Přeskočit na obsah
      </a>
      <SimpleHeader />
      <main id="main" className={styles.main}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.h1}>Stránka nenalezena</h1>
        <Link href="/" className="btn btn--primary">
          Zpět na hlavní stránku
        </Link>
      </main>
      <SimpleFooter />
    </div>
  );
}
