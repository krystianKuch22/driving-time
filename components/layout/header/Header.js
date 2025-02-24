import BurgerButton from "@/components/common/buttons/burgerButton/BurgerButton";
import { StyledHeader } from "./Header.style";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage("common");

  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Pobranie początkowej szerokości
    setWidth(window.innerWidth);

    // Funkcja do aktualizacji szerokości przy zmianie rozmiaru okna
    const handleResize = () => setWidth(window.innerWidth);

    // Nasłuchiwanie zmiany rozmiaru okna
    window.addEventListener("resize", handleResize);

    // Czyszczenie event listenera przy odmontowaniu komponentu
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMenu = () => {
    if (width < 1200) {
      !isOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "scroll");
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <StyledHeader $isOpen={isOpen}>
      <h2>
        <Link href="#mainSection" className="logo-link">
          <Image width={35} height={35} src="/png/logo.png" />
          <span className="logo-text">
            Driving <span className="second-part">Time</span>
          </span>
        </Link>
      </h2>
      <div className="menu-btns">
        <Link href="#aboutSection" onClick={showMenu}>
          {t("menu1")}
        </Link>
        <Link href="#benefitSection" onClick={showMenu}>
          {t("menu2")}
        </Link>
        <Link href="#demoSection" onClick={showMenu}>
          {t("menu3")}
        </Link>
        <Link href="#downloadSection" onClick={showMenu}>
          {t("menu6")}
        </Link>
        <Link href="#faqSection" onClick={showMenu}>
          {t("menu4")}
        </Link>
        <Link href="#contactSection" onClick={showMenu}>
          {t("menu5")}
        </Link>
      </div>
      <BurgerButton showMenu={showMenu} isOpen={isOpen} />
    </StyledHeader>
  );
}
