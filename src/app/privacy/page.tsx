import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SimpleHeader from "@/components/privacy/SimpleHeader";
import SimpleFooter from "@/components/privacy/SimpleFooter";
import { company, mailHref } from "@/lib/site";
import styles from "./privacy.module.css";

const title = "Zásady ochrany osobních údajů | UA WELDING-KM";
const description =
  "Jak UA WELDING-KM s.r.o. zpracovává osobní údaje podle GDPR. Web nepoužívá cookies ani formuláře.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy/" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/privacy/",
    locale: "cs_CZ",
    siteName: "UA WELDING-KM",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "UA WELDING-KM s.r.o." }],
  },
};

const purposes: ReadonlyArray<readonly [string, string]> = [
  ["Vyřízení poptávky a příprava nabídky", "písm. b), jednání o smlouvě na vaši žádost"],
  ["Plnění smlouvy o dílo, komunikace, fakturace", "písm. b), plnění smlouvy"],
  ["Vedení účetnictví a daňové evidence", "písm. c), plnění právní povinnosti"],
  ["Uplatnění a obhajoba právních nároků", "písm. f), oprávněný zájem"],
];

const legalBasisLabel = "Právní základ (čl. 6 odst. 1 GDPR)";

export default function PrivacyPage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Přeskočit na obsah
      </a>
      <SimpleHeader />

      <main id="main" className={styles.main}>
        <div className={styles.content}>
          <div className={styles.intro} data-reveal>
            <p className="eyebrow">Právní informace</p>
            <h1 className={styles.h1}>Zásady ochrany osobních údajů</h1>
            <p className={styles.lead}>
              Tyto zásady popisují, jak společnost UA WELDING-KM s.r.o. zpracovává osobní údaje v souladu s nařízením
              (EU) 2016/679 (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů.
            </p>
          </div>

          <section className={styles.section} aria-labelledby="p-1" data-reveal>
            <h2 id="p-1" className={styles.h2}>
              1. Správce osobních údajů
            </h2>
            <p className={styles.text}>
              {company.name}, IČO {company.ico}, DIČ {company.dic}, se sídlem {company.street}, {company.district},{" "}
              {company.postalCode} {company.city}, {company.registry}.
              <br />
              Kontakt pro ochranu osobních údajů: <a href={mailHref}>{company.email}</a>, tel. <span className={styles.nowrap}>{company.phoneDisplay}</span>.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="p-2" data-reveal>
            <h2 id="p-2" className={styles.h2}>
              2. Jaké údaje zpracováváme
            </h2>
            <p className={styles.text}>
              Údaje, které nám sami poskytnete e-mailem nebo telefonicky: jméno a příjmení, název firmy, telefon, e-mail,
              adresa místa realizace, popis zakázky a zaslané fotografie. Tyto webové stránky neobsahují formuláře a
              nepoužívají cookies.
            </p>
          </section>

          <section className={`${styles.section} ${styles.sectionTable}`} aria-labelledby="p-3" data-reveal>
            <h2 id="p-3" className={styles.h2}>
              3. Účely a právní základy
            </h2>
            <table className={styles.table} role="table">
              <thead role="rowgroup">
                <tr role="row">
                  <th scope="col" role="columnheader">
                    Účel
                  </th>
                  <th scope="col" role="columnheader">
                    {legalBasisLabel}
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                {purposes.map(([purpose, basis]) => (
                  <tr key={purpose} role="row">
                    <td role="cell" className={styles.purpose}>
                      {purpose}
                    </td>
                    <td role="cell" className={styles.basis} data-label={legalBasisLabel}>
                      {basis}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className={styles.section} aria-labelledby="p-4" data-reveal>
            <h2 id="p-4" className={styles.h2}>
              4. Jak dlouho údaje uchováváme
            </h2>
            <p className={styles.text}>
              Poptávky, které nevedou k uzavření smlouvy, uchováváme 12 měsíců od poslední komunikace a poté je smažeme.
              Údaje ze smluv a účetní doklady uchováváme po dobu stanovenou právními předpisy (zejména zákonem o
              účetnictví a zákonem o DPH, nejdéle 10 let).
            </p>
          </section>

          <section className={styles.section} aria-labelledby="p-5" data-reveal>
            <h2 id="p-5" className={styles.h2}>
              5. Komu údaje předáváme
            </h2>
            <p className={styles.text}>
              Údaje nikomu neprodáváme. Na základě smlouvy s námi je mohou zpracovávat: poskytovatel webhostingu OVH SAS
              (OVHcloud, Francie) a poskytovatel e-mailové služby Google Ireland Ltd. (Gmail). Při případném předání
              mimo EU (např. do USA) zajišťujeme ochranu rámcem EU-US Data Privacy Framework nebo standardními smluvními
              doložkami. Údaje dále předáváme orgánům veřejné moci, pokud to vyžaduje zákon.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="p-6" data-reveal>
            <h2 id="p-6" className={styles.h2}>
              6. Vaše práva
            </h2>
            <p className={styles.text}>
              Máte právo na přístup ke svým údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo
              vznést námitku proti zpracování na základě oprávněného zájmu. Žádost pošlete na{" "}
              <a href={mailHref}>{company.email}</a>; odpovíme nejpozději do 1 měsíce.
            </p>
            <p className={styles.text}>
              Máte také právo podat stížnost u dozorového úřadu: Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170
              00 Praha 7,{" "}
              <a href="https://uoou.gov.cz" rel="noopener noreferrer">
                www.uoou.gov.cz
              </a>
              .
            </p>
          </section>

          <section className={styles.section} aria-labelledby="p-7" data-reveal>
            <h2 id="p-7" className={styles.h2}>
              7. Automatizované rozhodování
            </h2>
            <p className={styles.text}>Neprovádíme automatizované rozhodování ani profilování.</p>
          </section>

          <p className={styles.effective} data-reveal="fade">
            Tyto zásady jsou účinné od 5. 10. 2026.
          </p>
        </div>
      </main>

      <SimpleFooter />
      <Reveal />
    </>
  );
}
