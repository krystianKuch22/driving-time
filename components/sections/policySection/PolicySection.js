import { useLanguage } from "@/context/LanguageContext";
import { StyledPolicySection } from "./PolicySection.style";

export default function PolicySection() {
  const { t, changeLanguage, language } = useLanguage();
  return (
    <StyledPolicySection>
      <h1>{t("policyH1").toUpperCase()}</h1>
      <p>{t("paragraph1")}</p>
      <p>{t("paragraph2")}</p>
      <p>{t("paragraph3")}</p>
      <h2>{t("whoIsAdmin")}</h2>
      <p>{t("paragraph4")}</p>
      <p>{t("paragraph5")}</p>
      <h2>{t("howCare")}</h2>
      <ol>
        <li>{t("point1")}</li>
        <li>{t("point2")}</li>
        <li>{t("point3")}</li>
        <li>{t("point4")}</li>
      </ol>
      <h2>{t("purpose")}</h2>
      <p>{t("paragraph6")}</p>
      <ol className="boldList">
        <li className="mainLi">
          <h3>{t("servicesPoint1")}</h3>
          <p>{t("paragraph7")}</p>
          <ol type="a">
            <li>{t("orderedList1A")}</li>
            <li>{t("orderedList1B")}</li>
            <li>{t("orderedList1C")}</li>
          </ol>
          <p>{t("paragraph8")}</p>
        </li>
        <li>
          <h3>{t("marketingPoint2")}</h3>
          <p>{t("paragraph9")}</p>
          <ol type="a">
            <li>{t("marketingListA")}</li>
            <li>{t("marketingListB")}</li>
            <li>{t("marketingListC")}</li>
          </ol>
          <p>{t("paragraph10")}</p>
        </li>
        <li>
          <h3>{t("mailContactPoint3")}</h3>
          <p>{t("paragraph11")}</p>
          <ol type="a">
            <li>{t("contactPolicyListA")}</li>
            <li>{t("contactPolicyListB")}</li>
            <li>{t("contactPolicyListC")}</li>
          </ol>
          <p>{t("paragraph12")}</p>
        </li>
      </ol>
      <h2>{t("rights")}</h2>
      <p>{t("paragraph13")}</p>
      <ol type="a">
        <li>{t("rightsListA")}</li>
        <li>{t("rightsListB")}</li>
        <li>{t("rightsListC")}</li>
        <li>{t("rightsListD")}</li>
      </ol>
      <h2>{t("whoShare")}</h2>
      <p>{t("paragraph14")}</p>
      <p>{t("paragraph15")}</p>
      <p>{t("paragraph16")}</p>
    </StyledPolicySection>
  );
}
