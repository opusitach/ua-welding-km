import { ArrowIcon } from "./icons";
import styles from "./Services.module.css";

const LEVELS = [
  { num: "01", title: "Menší zakázky", text: "Opravy, úpravy a jednorázové práce. Vezmeme i malou zakázku." },
  {
    num: "02",
    title: "Střední projekty",
    text: "Výroba a montáž na míru pro firmy, stavby i domácnosti. Zaměříme, vyrobíme a namontujeme.",
  },
  {
    num: "03",
    title: "Náročné realizace",
    text: "Průmyslové a stavební zakázky většího rozsahu, včetně montáže ocelových konstrukcí.",
  },
] as const;

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export default function Services() {
  return (
    <section id="sluzby" className={styles.section} aria-labelledby="sluzby-title">
      <div className={`container ${styles.stack}`}>
        <div className={styles.head}>
          <div className={styles.headTitle}>
            <p className="eyebrow" data-reveal="">Co děláme</p>
            <h2 id="sluzby-title" className="h2" data-reveal="" style={delay(80)}>
              Zakázky různé složitosti
            </h2>
          </div>
          <p className={`lead ${styles.headText}`} data-reveal="" style={delay(160)}>
            Poskytujeme svářečské služby a bereme menší opravy i rozsáhlé realizace. Napište nám, co potřebujete, a
            navrhneme postup.
          </p>
        </div>

        <ul className={styles.cards}>
          {LEVELS.map((level, i) => (
            <li key={level.num} className={styles.cardWrap} data-reveal="" style={delay(i * 110)}>
              <article className={styles.card}>
                <span className={styles.num} aria-hidden="true">
                  {level.num}
                </span>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{level.title}</h3>
                  <p className={styles.cardText}>{level.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className={styles.cta} data-reveal="">
          <div className={styles.ctaText}>
            <p className={styles.ctaTitle}>Máte zakázku?</p>
            <p className={styles.ctaSub}>Pošlete krátký popis a fotku. Ozveme se s cenou a termínem.</p>
          </div>
          <a href="#kontakt" className={`btn btn--dark ${styles.ctaBtn}`}>
            Nezávazně poptat
            <ArrowIcon size={22} className={styles.ctaArrow} />
          </a>
        </div>
      </div>
    </section>
  );
}
