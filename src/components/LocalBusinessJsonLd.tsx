import { SITE_URL, company } from "@/lib/site";

export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: company.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/og.jpg`,
    logo: `${SITE_URL}/images/logo-216.png`,
    telephone: company.phone,
    email: company.email,
    vatID: company.dic,
    taxID: company.ico,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      addressLocality: "Praha",
      addressRegion: "Praha 10 – Vršovice",
      postalCode: company.postalCode,
      addressCountry: "CZ",
    },
    areaServed: { "@type": "City", name: "Praha" },
    founder: { "@type": "Person", name: company.director },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
