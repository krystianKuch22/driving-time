import { LanguageProvider } from "@/context/LanguageContext";
import GlobalStyle from "@/styles/GlobalStyles";
import { darkTheme, lightTheme } from "@/styles/theme";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === "/") {
        // Usuwa #id z adresu
        if (window.location.hash) {
          history.replaceState(null, "", window.location.pathname);
        }

        // Opóźnione przewinięcie na górę (aby nadpisać zapamiętaną pozycję)
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 10); // 10ms opóźnienia (możesz zwiększyć do 50ms, jeśli nie działa)
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const toggleTheme = () => {
    const newtheme = theme === "dark" ? "light" : "dark";
    setTheme(newtheme);
    localStorage.setItem("theme", newtheme);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon2.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <LanguageProvider>
        <GlobalStyle />
        {/* <button onClick={toggleTheme}>Zmień motyw</button> */}
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
