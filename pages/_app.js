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
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newtheme = theme === "dark" ? "light" : "dark";
    setTheme(newtheme);
    localStorage.setItem("theme", newtheme);
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
