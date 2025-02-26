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
    const handlePopState = () => {
      if (window.location.pathname === '/') {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 10); // Opóźnienie, aby nadpisać domyślne zachowanie przeglądarki
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  

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
