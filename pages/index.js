import { Footer } from "@/components/layout/footer/Footer";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";


export default function Home() {
  const { t, changeLanguage, language } = useLanguage();

  return (
    <>
      {/* <LanguageSwitcher /> */}
      <p>{t("privacyPolicy")}</p>
      <p>{language}</p>
      <button onClick={() => changeLanguage("pl")}>Polski</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <Link href="/privacyPolicy">{t("privacyPolicy")}</Link>
      <Link href="termsOfUse">{t('termsOfUse')}</Link>
    </>
  );
}
