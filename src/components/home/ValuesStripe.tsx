import styles from "./ValuesStripe.module.css";

export default function ValuesStripe() {
  return (
    <div className={styles.stripe}>
      <p className={styles.words}>
        <span>KVALITA</span>
        <span className={styles.sep} aria-hidden="true">|</span>
        <span>SPOLEHLIVOST</span>
        <span className={styles.sep} aria-hidden="true">|</span>
        <span>PROFESIONALITA</span>
      </p>
      <div className={`hatch ${styles.hatch}`} aria-hidden="true" />
    </div>
  );
}
