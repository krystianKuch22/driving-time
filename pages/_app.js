// import { LanguageProvider } from "@/context/LanguageContext";

import { LanguageProvider } from "@/context/LanguageContext";
import GlobalStyle from "@/styles/GlobalStyles";

function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <GlobalStyle/>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default App;
