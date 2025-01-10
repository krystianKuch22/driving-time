// import { LanguageProvider } from "@/context/LanguageContext";

import { LanguageProvider } from "@/context/LanguageContext";

function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
