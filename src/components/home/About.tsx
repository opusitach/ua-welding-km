import { ClockIcon, LayersIcon, MedalIcon, ShieldIcon } from "./icons";
import styles from "./About.module.css";

const REASONS = [
  { icon: ShieldIcon, title: "Kvalita", text: "Svařujeme pečlivě a před předáním každou práci zkontrolujeme." },
  { icon: ClockIcon, title: "Spolehlivost", text: "Dodržujeme domluvený termín a cenu." },
  {
    icon: MedalIcon,
    title: "Profesionalita",
    text: "Dostanete srozumitelnou nabídku. Na stavbě pracujeme podle bezpečnostních předpisů.",
  },
  { icon: LayersIcon, title: "Řešení na míru", text: "Každou zakázku nejdřív posoudíme a potom navrhneme postup." },
] as const;

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export default function About() {
  return (
    <section id="o-nas" className={styles.section} aria-labelledby="o-nas-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className="eyebrow" data-reveal="">Kdo jsme</p>
          <h2 id="o-nas-title" className="h2" data-reveal="" style={delay(80)}>
            Svářečská firma z Prahy
          </h2>
          <p className="lead" data-reveal="" style={delay(160)}>
            UA WELDING-KM s.r.o. dělá svářečské a zámečnické práce, montáže ocelových konstrukcí a průmyslové i
            stavební zakázky. Pracujeme pro firmy, stavební společnosti i soukromé zákazníky v Praze a okolí.
          </p>
          <p className="lead" data-reveal="" style={delay(240)}>
            Zakázky osobně vede jednatel Mykhailo Kedyk. S ním řešíte poptávku, cenu i předání hotové práce.
          </p>
        </div>

        <div className={styles.why}>
          <h2 className="eyebrow" data-reveal="">Proč my</h2>
          <ul className={styles.cards}>
            {REASONS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className={styles.cardWrap} data-reveal="" style={delay(80 + i * 100)}>
                <div className={styles.card}>
                  <span className={`icon-ring ${styles.ring}`}>
                    <Icon size={26} />
                  </span>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardText}>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
