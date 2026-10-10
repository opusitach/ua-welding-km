// Single source of truth for company data (texts approved — do not change).
export const SITE_URL = "https://welding-km.com";

export const company = {
  name: "UA WELDING-KM s.r.o.",
  street: "Moskevská 1464/61",
  district: "Vršovice",
  postalCode: "101 00",
  city: "Praha 10",
  ico: "17525021",
  dic: "CZ17525021",
  registry:
    "zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 372731",
  director: "Mykhailo Kedyk",
  phone: "+420774151442",
  phoneDisplay: "+420 774 151 442",
  email: "uaweldingkm@gmail.com",
} as const;

export const telHref = `tel:${company.phone}`;
export const mailHref = `mailto:${company.email}`;
export const mailPoptavkaHref = `mailto:${company.email}?subject=Popt%C3%A1vka`;
