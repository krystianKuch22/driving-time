import Image from "next/image";
import { StyledBenefitsSection } from "./BenefitsSection.style";
import { useLanguage } from "@/hooks/useLanguage";

export default function BenefitsSection() {
  const { t } = useLanguage("common");

  return (
    <StyledBenefitsSection id="benefitSection">
      <div className="main-container">
        <div className="h-container">
          <h2>{t("benefitsSection").h2}</h2>
        </div>
        <div className="benefits-container">
          <div className="card">
            <div className="title">
              <div className="card-img">
                <Image
                  src="/png/school.png"
                  alt="Image of home"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3>{t("benefitsSection").title1}</h3>
            </div>
            <div className="text">
              <ul>
                <li>{t("benefitsSection.card1.li1")}</li>
                <li>{t("benefitsSection.card1.li2")}</li>
                <li>{t("benefitsSection.card1.li3")}</li>
                <li>{t("benefitsSection.card1.li4")}</li>
                <li>{t("benefitsSection.card1.li5")}</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="title">
              <div className="card-img">
                <Image
                  src="/png/car.png"
                  alt="Image of home"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3>{t("benefitsSection").title2}</h3>
            </div>
            <div className="text">
              <ul>
                <li>{t("benefitsSection.card2.li1")}</li>
                <li>{t("benefitsSection.card2.li2")}</li>
                <li>{t("benefitsSection.card2.li3")}</li>
                <li>{t("benefitsSection.card2.li4")}</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="title">
              <div className="card-img">
                <Image
                  src="/png/social.png"
                  alt="Image of home"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3>{t("benefitsSection").title3}</h3>
            </div>
            <div className="text">
              <ul>
                <li>{t("benefitsSection.card3.li1")}</li>
                <li>{t("benefitsSection.card3.li2")}</li>
                <li>{t("benefitsSection.card3.li3")}</li>
                <li>{t("benefitsSection.card3.li4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledBenefitsSection>
  );
}
