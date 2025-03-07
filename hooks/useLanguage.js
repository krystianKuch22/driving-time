import { useLanguageContext } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export const useLanguage = (namespace) => {
  const { language, loadNamespace } = useLanguageContext();
  const [namespaceTranslations, setNamespaceTranslations] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      setLoading(true);
      const data = await loadNamespace(namespace);
      setNamespaceTranslations(data);
      setLoading(false);
    };

    fetchTranslations();
  }, [namespace, language]);

  // const t = (key) => {

  //   return namespaceTranslations[key] || key; // Zwraca klucz, jeśli brak tłumaczenia
  // };

  const t = (key, defaultValue = key) => {
    return (
      key.split(".").reduce((obj, key) => obj?.[key], namespaceTranslations) ||
      defaultValue
    );
  };

  return { t, language, loading };
};
