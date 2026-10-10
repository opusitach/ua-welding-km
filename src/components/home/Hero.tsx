import { company, telHref } from "@/lib/site";
import Picture, { WELDER_VARIANTS } from "./Picture";
import { ArrowIcon, ClockIcon } from "./icons";
import styles from "./Hero.module.css";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media}>
        <Picture
          base="/images/welder"
          variants={WELDER_VARIANTS}
          fallbackExt="jpg"
          alt="Svářeč při práci"
          width={1122}
          height={1402}
          sizes="(min-width: 1024px) min(57vw, 1000px), 100vw"
          eager
          highPriority
          className={styles.picture}
          imgClassName={styles.img}
        />
        <div className={styles.shade} aria-hidden="true" />
        {/* Yellow diagonal: desktop runs along the photo's left edge, mobile along its bottom edge */}
        <svg className={`${styles.line} ${styles.lineDesktop}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="26" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
        </svg>
        <svg className={`${styles.line} ${styles.lineMobile}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="100" x2="100" y2="76" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={`eyebrow ${styles.enter}`} style={d(100)}>
            {company.name}
          </p>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.enter} style={d(180)}>Svářečské práce</span>
            <br />
            <span className={`${styles.accent} ${styles.enter}`} style={d(280)}>
              v Praze a okolí
            </span>
          </h1>
          <p className={`${styles.lead} ${styles.enter}`} style={d(380)}>
            Zámečnické práce, montáže ocelových konstrukcí, průmyslové a stavební zakázky. Menší opravy i velké
            projekty.
          </p>
          <div className={`${styles.buttons} ${styles.enter}`} style={d(480)}>
            <a href="#kontakt" className="btn btn--primary">
              Nezávazně poptat
              <ArrowIcon size={22} />
            </a>
            <a href={telHref} className={`btn btn--outline ${styles.call}`}>
              Zavolat {company.phoneDisplay}
            </a>
          </div>
          <p className={`${styles.note} ${styles.enter}`} style={d(580)}>
            <ClockIcon size={22} strokeWidth={2} className={styles.noteIcon} />
            Odpovíme do 24 hodin
          </p>
        </div>
      </div>
    </section>
  );
}
