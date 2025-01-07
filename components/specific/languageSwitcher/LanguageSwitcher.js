import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang) => {
    // Zachowaj bieżącą ścieżkę i zmień język w adresie URL
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pl')}>Polski</button>
    </div>
  );
};

export default LanguageSwitcher;
