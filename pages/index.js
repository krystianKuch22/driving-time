import fs from "fs";
import path from "path";
import { Footer } from "@/components/layout/footer/Footer";
import LanguageSwitcher from "@/components/specific/languageSwitcher/LanguageSwitcher";

export default function Home({ translations }) {
  return (
    <>
      <LanguageSwitcher />
      <Footer language={translations} />
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
