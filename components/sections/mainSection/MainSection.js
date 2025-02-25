import Image from "next/image";
import { StyledMainSection } from "./MainSection.style";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

export default function MainSection() {
  const { t } = useLanguage("common");

  return (
    <StyledMainSection id="mainSection">
      <div className="top-gradient"></div>
      <div className="bottom-gradient"></div>

      <div className="main-container">
        <div className="align-container">
          <div className="text-container">
            <h1>Driving Time</h1>
            <h2>{t("mainSection").h2}</h2>
            <p>{t("mainSection").paragraph}</p>
            <div className="btn-container">
              <Link href="#registerSection"> {t("mainSection").button}</Link>
            </div>
          </div>
        </div>
        <div className="main-img">
          <Image
            src="/png/mainImg.png"
            alt="Image of L car"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </StyledMainSection>
  );
}
