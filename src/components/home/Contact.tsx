import { company, mailHref, mailPoptavkaHref, telHref } from "@/lib/site";
import { DocIcon, IdCardIcon, MailIcon, PhoneIcon, PinIcon, UserIcon } from "./icons";
import styles from "./Contact.module.css";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export default function Contact() {
  return (
    <section id="kontakt" className={styles.section} aria-labelledby="kontakt-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <div className={styles.headTitle}>
            <p className="eyebrow" data-reveal="">Kontakt</p>
            <h2 id="kontakt-title" className="h2" data-reveal="" style={delay(80)}>
              Domluvme se na zakázce
            </h2>
          </div>

          <address className={styles.list}>
            <div className={styles.row} data-reveal="" style={delay(120)}>
              <span className="icon-ring">
                <UserIcon />
              </span>
              <div className={styles.person}>
                <span className={styles.personName}>MYKHAILO KEDYK</span>
                <span className={styles.personRole}>JEDNATEL / MANAGING DIRECTOR</span>
              </div>
            </div>
            <div className={styles.row} data-reveal="" style={delay(200)}>
              <span className="icon-ring">
                <PhoneIcon />
              </span>
              <a href={telHref} className={`${styles.link} ${styles.phone}`}>
                {company.phoneDisplay}
              </a>
            </div>
            <div className={styles.row} data-reveal="" style={delay(280)}>
              <span className="icon-ring">
                <MailIcon />
              </span>
              <a href={mailHref} className={`${styles.link} ${styles.mail}`}>
                {company.email}
              </a>
            </div>
            <div className={styles.row} data-reveal="" style={delay(360)}>
              <span className="icon-ring">
                <PinIcon />
              </span>
              <p className={styles.addr}>
                {company.street}, {company.district}
                <br />
                {company.postalCode} {company.city}
              </p>
            </div>
          </address>

          <dl className={styles.ids} data-reveal="" style={delay(200)}>
            <div className={styles.id}>
              <span className={`icon-ring ${styles.idRing}`}>
                <IdCardIcon size={22} />
              </span>
              <div>
                <dt className={styles.idLabel}>IČO:</dt>
                <dd className={styles.idValue}>{company.ico}</dd>
              </div>
            </div>
            <div className={styles.id}>
              <span className={`icon-ring ${styles.idRing}`}>
                <DocIcon size={22} />
              </span>
              <div>
                <dt className={styles.idLabel}>DIČ:</dt>
                <dd className={styles.idValue}>{company.dic}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className={styles.card} data-reveal="right" style={delay(160)}>
          <h3 className={styles.cardTitle}>Nezávazná poptávka</h3>
          <p className={styles.cardText}>
            Zavolejte nebo pošlete e-mail s krátkým popisem a fotkou. Odpovíme do 24 hodin.
          </p>
          <a href={telHref} className={`btn btn--primary ${styles.cardBtn}`}>
            <PhoneIcon size={22} strokeWidth={2} />
            Zavolat {company.phoneDisplay}
          </a>
          <a href={mailPoptavkaHref} className={`btn btn--outline ${styles.cardBtn}`}>
            <MailIcon size={22} strokeWidth={2} className={styles.mailIcon} />
            Napsat e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
