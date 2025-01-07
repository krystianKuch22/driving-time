import fs from "fs";
import path from "path";

export default function PrivacyPolicy({ translations }) {
  return (
    <>
      <div>
        POLITYKA PRYWATNOŚCI APLIKACJI MOBILNEJ
        {translations.privacyPolicy}
      </div>
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
