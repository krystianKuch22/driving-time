import BurgerButton from "@/components/common/buttons/burgerButton/BurgerButton";
import { StyledHeader } from "./Header.style";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledHeader $isOpen={isOpen}>
      <h2>Drive time</h2>
      <BurgerButton showMenu={showMenu} isOpen={isOpen}/>
    </StyledHeader>
  );
}
