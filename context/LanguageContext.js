import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const { locale } = router; // Pobiera aktualny język z URL
  const [language, setLanguage] = useState(locale || "pl" ); // Domyślny język
  const [translations, setTranslations] = useState({}); // Przechowywane tłumaczenia
  const [loading, setLoading] = useState(true);

  console.log(locale)

  // Funkcja do ładowania tłumaczeń dla danego namespace
  const loadNamespace = async (namespace) => {
    // if (translations[namespace]) {
    //   return translations[namespace]; // Zwróć już załadowane tłumaczenia
    // }

    setLoading(true)

    try {
      const response = await fetch(`/locales/${language}/${namespace}.json`);
      const data = await response.json();

      setTranslations((prev) => ({
        ...prev,
        [namespace]: data,
      }));

      setLoading(false)

      return data;
    } catch (error) {
      console.error(
        `Error loading namespace "${namespace}" for language "${language}":`,
        error
      );
      return {};
    }
  };

  // Funkcja zmiany języka
  const changeLanguage = (lang) => {
    setLanguage(lang);
    router.push(router.pathname, router.asPath, { locale: lang });
    setTranslations({}); // Zresetuj tłumaczenia
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
