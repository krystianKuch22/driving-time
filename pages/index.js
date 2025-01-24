import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import ContactSection from "@/components/sections/contactSection/ContactSection";
import MainSection from "@/components/sections/mainSection/MainSection";
import { useLanguageContext } from "@/context/LanguageContext";

// import { useLanguage } from "@/context/LanguageContext";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage("common");
  const { changeLanguage } = useLanguageContext();

  return (
    <>
      <Header/>
      <MainSection/>
      <ContactSection/>
      <Footer language={t}/>

      {/* <button onClick={() => changeLanguage("pl")}>Polski</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <Link href="/privacy-policy">{t("privacyPolicy")}</Link>
      <Link href="terms-of-use">{t("termsOfUse")}</Link> */}
    </>
  );
}
