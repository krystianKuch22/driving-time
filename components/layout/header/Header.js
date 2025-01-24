import BurgerButton from "@/components/common/buttons/burgerButton/BurgerButton";
import { StyledHeader } from "./Header.style";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    !isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledHeader $isOpen={isOpen}>
      <h2>
        <Link href="/">Drive Time</Link>
      </h2>
      <BurgerButton showMenu={showMenu} isOpen={isOpen} />
    </StyledHeader>
  );
}
