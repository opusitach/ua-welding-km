import { CheckIcon, ClockIcon, DocIcon, PhoneIcon, RulerIcon } from "./icons";
import styles from "./Process.module.css";

const STEPS = [
  {
    icon: PhoneIcon,
    title: "Zavolejte nebo napište",
    text: "Popište, co potřebujete. Fotka nám pomůže. Ozveme se do 24 hodin.",
  },
  { icon: RulerIcon, title: "Prohlídka a zaměření", text: "Přijedeme na místo, prohlédneme ho a vše potřebné zaměříme." },
  { icon: DocIcon, title: "Cenová nabídka", text: "Pošleme rozpočet s cenou a termínem. Nabídka je nezávazná." },
  { icon: CheckIcon, title: "Realizace a předání", text: "Práci provedeme, zkontrolujeme a předáme hotovou." },
] as const;

export default function Process() {
  return (
    <section id="postup" className={styles.section} aria-labelledby="postup-title">
      <div className={`container ${styles.stack}`}>
        <div className={styles.head}>
          <div className={styles.headTitle}>
            <p className="eyebrow" data-reveal="">Jak to probíhá</p>
            <h2
              id="postup-title"
              className="h2"
              data-reveal=""
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              Od telefonátu po hotovou práci
            </h2>
          </div>
          <div
            className={styles.badge}
            data-reveal=""
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <span className={styles.badgeIcon}>
              <ClockIcon size={26} strokeWidth={2} />
            </span>
            <div className={styles.badgeText}>
              <p className={styles.badgeTitle}>Odpověď do 24 hodin</p>
              <p className={styles.badgeSub}>Na každou poptávku reagujeme do druhého dne.</p>
            </div>
          </div>
        </div>

        {/* data-reveal="group": the wrapper itself stays visible; it only toggles .is-visible for the line/circle animation */}
        <div className={styles.track} data-reveal="group">
          <span className={styles.line} aria-hidden="true" />
          <ol className={styles.steps}>
            {STEPS.map(({ icon: Icon, title, text }, i) => {
              const last = i === STEPS.length - 1;
              return (
                <li key={title} className={styles.step} style={{ "--i": i } as React.CSSProperties}>
                  <span className={`${styles.circle} ${last ? styles.circleFilled : ""}`} aria-hidden="true">
                    <Icon size={32} />
                  </span>
                  {!last && <span className={styles.connector} aria-hidden="true" />}
                  <span className={styles.krok}>KROK 0{i + 1}</span>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepText}>{text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
