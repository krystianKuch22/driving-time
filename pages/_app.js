import LoadingScreen from "@/components/layout/loading/LoadingScreen";
import { LanguageProvider } from "@/context/LanguageContext";
import GlobalStyle from "@/styles/GlobalStyles";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart); // Start ładowania
    router.events.on("routeChangeComplete", handleComplete); // Zakończenie
    router.events.on("routeChangeError", handleComplete); // Obsługa błędów

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
    </Head>
    <LanguageProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </LanguageProvider>
    </>
  );
}

export default App;
