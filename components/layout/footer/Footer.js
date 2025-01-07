import Link from "next/link";
import { StyledFooter } from "./Footer.style";


export function Footer({language}) {
  

  return (
    <StyledFooter>
    <Link href="/privacyPolicy">{language.privacyPolicy}</Link>
    </StyledFooter>
  );
}
