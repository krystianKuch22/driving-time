import Link from "next/link";
import { StyledFooter } from "./Footer.style";

export function Footer({ language }) {
  return (
    <StyledFooter>
      <div>
        <Link href="/privacy-policy">{language("privacyPolicy")}</Link>
        {/* <Link href="/delete-account">{language("delete")}</Link> */}
      </div>
    </StyledFooter>
  );
}
