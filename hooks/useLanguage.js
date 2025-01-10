import { useLanguageContext } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';


export const useLanguage = (namespace) => {
  const { language, loadNamespace } = useLanguageContext();
  const [namespaceTranslations, setNamespaceTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const data = await loadNamespace(namespace);
      setNamespaceTranslations(data);
    };

    fetchTranslations();
  }, [namespace, language]);

  const t = (key) => {
    return namespaceTranslations[key] || key; // Zwraca klucz, jeśli brak tłumaczenia
  };

  return { t, language };
};