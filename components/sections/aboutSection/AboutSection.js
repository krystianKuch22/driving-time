import Image from "next/image";
import { StyledAboutSection } from "./AboutSection.style";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

export default function AboutSection() {
  const { t } = useLanguage("common");

  return (
    <StyledAboutSection id="aboutSection">
      <div className="main-container">
        <div className="align-container">
          <div className="text-container">
            <h2>
              Driving Time to aplikacja do zarzadzania harmonogramem pracy szkół
              jazdy. Złożona z trzech modułów:{" "}
            </h2>
            <ul>
              <li>Szkoła</li>
              <li>Instruktor</li>
              <li>Kursant</li>
            </ul>
            <p>
              Umożliwia m.in. łatwe planowanie czasu pracy, zdalne umawianie
              lekcji jazdy, edytowanie listy kursantów i instruktorów, tworzenie
              notatek, a nawet przekierowanie do połączeń telefonicznych
              ułatwiając tym samym komunikację szkoła – instruktor - kursant.
            </p>
            <p>
              Dostęp do poszczególnych funkcjonalności zróżnicowany jest w
              zależności od modułu, z którego korzystamy. Dodatkowo aplikacja
              prezentuje statystyki kursowe oraz umożliwia kursantom powtórzenie
              zdobytej wiedzy w formie ćwiczeń testowych. Dostępna na platformy
              Android, IOS, Windows oraz Mac. Pobierz Driving Time już dziś i
              dołącz do grona szkół, które stawiają na efektywne zarzadzanie i
              nowoczesne rozwiązania!
            </p>
            {/* <h2>{t("aboutSection").h2}</h2>
            <p>{t("aboutSection").paragraph1}</p>
            <p>{t("aboutSection").paragraph2}</p> */}
            {/* <div className="btn-container">
              <Link href="#demoSection">{t("aboutSection").button}</Link>
            </div> */}
          </div>
        </div>
        <div className="about-img">
          <Image
            src="/png/phone.png"
            alt="Image of L car"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </StyledAboutSection>
  );
}
