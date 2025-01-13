import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const { locale } = router;
  const [language, setLanguage] = useState("pl");
  const [translations, setTranslations] = useState({}); // Przechowuje tłumaczenia dla różnych namespace'ów

  console.log(language)
  // Funkcja do wczytywania tłumaczeń dla danego namespace
  const loadNamespace = async (namespace) => {
    if (translations[namespace]) {
      // Namespace już załadowany
      return translations[namespace];
    }

    try {
      const response = await fetch(`/locales/${language}/${namespace}.json`);
      const data = await response.json();

      setTranslations((prevTranslations) => ({
        ...prevTranslations,
        [namespace]: data,
      }));

      return data;
    } catch (error) {
      console.error(
        `Error loading namespace "${namespace}" for language "${language}":`,
        error
      );
      return {};
    }
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    router.push(router.pathname, router.asPath, { locale: lang });
    setTranslations({}); // Reset tłumaczeń po zmianie języka
  };

  return (
    <LanguageContext.Provider
      value={{ language, loadNamespace, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
