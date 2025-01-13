// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useRouter } from "next/router";

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const router = useRouter();
//   const { locale } = router; // Pobieranie aktualnego języka z URL
//   const [language, setLanguage] = useState(locale || "pl"); // Domyślny język to polski
//   const [translations, setTranslations] = useState({}); // Przechowywanie tłumaczeń

//   // Funkcja do wczytywania tłumaczeń z plików JSON
//   const loadTranslations = async (lang) => {
//     try {
//       const response = await fetch(`/locales/${lang}/common.json`);
//       const data = await response.json();
//       setTranslations(data); // Ustaw tłumaczenia
//     } catch (error) {
//       console.error("Error loading translations:", error);
//     }
//   };

//   // Ładowanie tłumaczeń przy zmianie języka
//   useEffect(() => {
//     loadTranslations(language);
//   }, [language]);

//   const t = (key) => translations[key] || key; // Funkcja tłumaczeń (z fallbackiem do klucza)

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     router.push(router.pathname, router.asPath, { locale: lang }); // Aktualizacja języka w URL
//   };

//   return (
//     <LanguageContext.Provider value={{ language, t, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // Hook do korzystania z kontekstu
// export const useLanguage = () => useContext(LanguageContext);
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const { locale } = router; // Pobiera aktualny język z URL
  const [language, setLanguage] = useState(locale || "pl" ); // Domyślny język
  const [translations, setTranslations] = useState({}); // Przechowywane tłumaczenia

  console.log(locale)

  // Funkcja do ładowania tłumaczeń dla danego namespace
  const loadNamespace = async (namespace) => {
    if (translations[namespace]) {
      return translations[namespace]; // Zwróć już załadowane tłumaczenia
    }

    try {
      const response = await fetch(`/locales/${language}/${namespace}.json`);
      const data = await response.json();

      setTranslations((prev) => ({
        ...prev,
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
