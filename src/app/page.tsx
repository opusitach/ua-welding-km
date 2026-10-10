import type { Metadata } from "next";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import Reveal from "@/components/Reveal";
import About from "@/components/home/About";
import CallBar from "@/components/home/CallBar";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import ValuesStripe from "@/components/home/ValuesStripe";

const title = "Svářečské práce Praha | UA WELDING-KM";
const description =
  "Zámečnické práce, montáže ocelových konstrukcí, průmyslové a stavební zakázky v Praze a okolí. Menší opravy i velké projekty. Odpovíme do 24 hodin.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: "UA WELDING-KM",
    title,
    description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Přeskočit na obsah
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ValuesStripe />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <CallBar />
      <Reveal />
      <LocalBusinessJsonLd />
    </>
  );
}
