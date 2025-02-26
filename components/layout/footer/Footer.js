import Link from "next/link";
import { StyledFooter } from "./Footer.style";
import Image from "next/image";

export function Footer({ language }) {
  return (
    <StyledFooter>
      <div className="main-container">
        <h2>
          <Link href="#mainSection" className="logo-link">
            <Image width={35} height={35} src="/png/logo.png" />
            <span className="logo-text">
              Driving <span className="second-part">Time</span>
            </span>
          </Link>
        </h2>
        {/* <Link href="#mainSection" className="logo-container">
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
        </Link> */}
        <div className="text-container">
          <div className="colDiv">
            <p>
              Intuicyjna aplikacja stworzona z myślą o ośrodkach szkolenia
              kierowców, instruktorach oraz kursantach.
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
            <div></div>
          </div>
          <div className="col3">
            <Link href="#faqSection">FAQ</Link>
            <Link href="#downloadSection" className="download-btn">
              Pobierz aplikację ze sklepu
            </Link>
            <div></div>
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
