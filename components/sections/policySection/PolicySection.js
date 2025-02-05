import { useLanguage } from "@/hooks/useLanguage";
import { StyledPolicySection } from "./PolicySection.style";
import LoadingScreen from "@/components/layout/loading/LoadingScreen";
import { useEffect } from "react";

export default function PolicySection() {
  const { t, loading } = useLanguage("policyPrivacy");

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => (document.body.style.overflow = ""), 1000);
    }
  }, [loading]);

  return (
    <StyledPolicySection>
      <LoadingScreen loading={loading} />
      <h1>{t("policyH1").toUpperCase()}</h1>
      <p>
        <strong>{t("paragraph1").nameApp}</strong>
        {" " + t("paragraph1").middleText}
        <strong>{" " + t("paragraph1").application}</strong>
        {" " + t("paragraph1").mainPart}
      </p>
      <p>{t("paragraph2")}</p>
      <p>
        {t("paragraph3").firstPart}
        <strong>{" " + t("paragraph3").rodo}</strong>
        {" " + t("paragraph3").secondPart}
      </p>
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
      <p>
        {t("paragraph13").part1} <br />
        {t("paragraph13").part2}
      </p>
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
