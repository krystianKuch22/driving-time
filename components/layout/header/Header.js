import BurgerButton from "@/components/common/buttons/burgerButton/BurgerButton";
import { StyledHeader } from "./Header.style";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage("common");

  const showMenu = () => {
    !isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
    setIsOpen((prev) => !prev);
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
        <Link href="#aboutSection">{t("menu1")}</Link>
        <Link href="#benefitSection">{t("menu2")}</Link>
        <Link href="#demoSection">{t("menu3")}</Link>
        <Link href="#downloadSection">{t("menu6")}</Link>
        <Link href="#faqSection">{t("menu4")}</Link>
        <Link href="#contactSection">{t("menu5")}</Link>
      </div>
      <BurgerButton showMenu={showMenu} isOpen={isOpen} />
    </StyledHeader>
  );
}
