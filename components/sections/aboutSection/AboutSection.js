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
            <h2>{t("aboutSection").h2}</h2>
            <p>{t("aboutSection").paragraph1}</p>
            <p>{t("aboutSection").paragraph2}</p>
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
