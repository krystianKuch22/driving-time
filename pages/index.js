import { Footer } from "@/components/layout/footer/Footer";
import { useLanguageContext } from "@/context/LanguageContext";

// import { useLanguage } from "@/context/LanguageContext";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage("common");
  const { changeLanguage } = useLanguageContext();

  return (
    <>
      {/* <LanguageSwitcher /> */}
      <p>{t("privacyPolicy")}</p>
      <p>{t("hello")}</p>
      {/* <p>{language}</p> */}
      <button onClick={() => changeLanguage("pl")}>Polski</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <Link href="/privacyPolicy">{t("privacyPolicy")}</Link>
      <Link href="termsOfUse">{t("termsOfUse")}</Link>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const filePath = path.resolve(process.cwd(), `locales/${locale}/common.json`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const translations = JSON.parse(fileContents);

  return {
    props: {
      translations, // Tłumaczenia przesłane jako props
    },
  };
}
