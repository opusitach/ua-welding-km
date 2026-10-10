import { company } from "@/lib/site";
import Picture, { LOGO_VARIANTS } from "./Picture";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <Picture
          base="/images/logo"
          variants={LOGO_VARIANTS}
          fallbackExt="png"
          alt="UA WELDING-KM s.r.o."
          width={228}
          height={72}
          sizes="228px"
          className={styles.logoWrap}
          imgClassName={styles.logo}
        />
        <p className={styles.legal}>
          {company.name}, se sídlem {company.street}, {company.district}, {company.postalCode} {company.city}, IČO{" "}
          {company.ico}, DIČ {company.dic}, {company.registry}.
        </p>
        <nav aria-label="Právní informace" className={styles.nav}>
          <a href="/privacy/" className={styles.navLink}>
            Zásady ochrany osobních údajů
          </a>
        </nav>
      </div>
      <div className="container">
        <div className={styles.bottom}>
          <span>© 2026 UA WELDING-KM s.r.o. Všechna práva vyhrazena.</span>
          <span>welding-km.com</span>
        </div>
      </div>
    </footer>
  );
}
