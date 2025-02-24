import Link from "next/link";
import { StyledFooter } from "./Footer.style";
import Image from "next/image";

export function Footer({ language }) {
  return (
    <StyledFooter>
      <div className="main-container">
        <Link href="#mainSection" className="logo-container">
          <div className="logo-img">
            <Image
              src="/svg/logo.svg"
              alt="Image of L car"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2>
            Driving <span>Time</span>
          </h2>
        </Link>
        <div className="text-container">
          <div className="colDiv">
            <p>
              [informacje o autorze] Nulla venenatis elit egestas augue
              imperdiet aliquet. Vivamus rhoncus vel tortor non tincidunt.
              Suspendisse consectetur fringilla euismod. In et blandit purus,
              quis sodales ante.
            </p>
          </div>
          <div className="deco">
            <div></div>
          </div>
          <div className="col1">
            <Link href="#mainSection">O aplikacji</Link>
            <Link href="#benefitSection">Dlaczego warto</Link>
            <Link href="#demoSection">Zobacz aplikację</Link>
          </div>
          <div className="col2">
            {/* <Link href="/">Informacje o płatnościach</Link> */}
            <Link href="#registerSection">Rejestracja szkoły</Link>
            <Link href="#contactSection">Kontakt</Link>
          </div>
          <div className="col3">
            <Link href="#faqSection">FAQ</Link>
            <Link href="#downloadSection" className="download-btn">Pobierz</Link>
          </div>
        </div>
      </div>
      <div className="under-footer">
        <Link href="/privacy-policy">Polityka prywatności</Link>
        <Link href="/terms-of-use">Regulamin</Link>
      </div>
    </StyledFooter>
  );
}
