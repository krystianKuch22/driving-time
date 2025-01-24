import { StyledBurgerButton } from "./BurgerButton.style";

export default function BurgerButton({showMenu, isOpen}) {
  

  return (
    <StyledBurgerButton onClick={showMenu} $isOpen={isOpen}>
      <div className="up"></div>
      <div className="middle"></div>
      <div className="down"></div>
    </StyledBurgerButton>
  );
}
