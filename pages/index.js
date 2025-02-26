import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import LoadingScreen from "@/components/layout/loading/LoadingScreen";
import AboutSection from "@/components/sections/aboutSection/AboutSection";
import BenefitsSection from "@/components/sections/benefitsSection/BenefitsSection";
import ContactSection from "@/components/sections/contactSection/ContactSection";
import DemoSection from "@/components/sections/demoSection/DemoSection";
import DownloadSection from "@/components/sections/downloadSection/DownloadSection";
import FaqSection from "@/components/sections/faq/FaqSection";
import MainSection from "@/components/sections/mainSection/MainSection";
import RegisterSection from "@/components/sections/registerSection/RegisterSection";
import { useLanguageContext } from "@/context/LanguageContext";

import { useLanguage } from "@/hooks/useLanguage";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { t, loading } = useLanguage("common");
  const { changeLanguage } = useLanguageContext();

  const router = useRouter();

  useEffect(() => {
    // Po każdym odświeżeniu strony resetuj scroll na samą górę (bez animacji)
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <Header />
      <MainSection />
      <AboutSection />
      <BenefitsSection />
      <DemoSection />
      <DownloadSection />
      <RegisterSection />
      <FaqSection />
      <ContactSection />
      <Footer language={t} />

      {/* <button onClick={() => changeLanguage("pl")}>Polski</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <Link href="/privacy-policy">{t("privacyPolicy")}</Link>
      <Link href="terms-of-use">{t("termsOfUse")}</Link> */}
    </>
  );
}
