import Link from "next/link";
import { company } from "@/lib/site";
import styles from "./SimpleFooter.module.css";

export default function SimpleFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>
          © 2026 {company.name} · IČO {company.ico} · {company.street}, {company.district}, {company.postalCode} {company.city}
        </span>
        <nav aria-label="Právní informace" className={styles.nav}>
          <Link href="/privacy/" className={styles.link}>
            Ochrana osobních údajů
          </Link>
        </nav>
      </div>
    </footer>
  );
}
