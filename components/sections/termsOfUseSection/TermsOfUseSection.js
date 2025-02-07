import { useLanguage } from "@/hooks/useLanguage";
import { StyledTermsOfUse } from "./TermsOfUseSection.style";
import { useEffect } from "react";
import LoadingScreen from "@/components/layout/loading/LoadingScreen";

export default function TermsOfUseSection() {
  const { t, loading } = useLanguage("termsOfUse");

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => (document.body.style.overflow = ""), 1000);
    }
  }, [loading]);

  return (
    <>
      <LoadingScreen loading={loading} />
      <StyledTermsOfUse>
        <h1>{t("termsOfUseH1")}</h1>
        <p>
          {t("paragraph1").part1 + " "}{" "}
          <strong>{t("paragraph1").nameApp}</strong>{" "}
          {" " + t("paragraph1").part2 + " "}
          <strong>{t("paragraph1").App}</strong>
          {t("paragraph1").part3}
          <strong>{t("paragraph1").service}</strong>
          {t("paragraph1").part4}
        </p>
        <ol type="I" className="firstList">
          <li>
            <h3>{t("definitionsH3")}</h3>
            <ol>
              <li>
                {t("definitionsList1")}
                <ol type="a">
                  <li>
                    <strong>{t("usedDefinitionsList1A").part1}</strong> -{" "}
                    {t("usedDefinitionsList1A").part2}
                  </li>
                  <li>
                    <strong>{t("usedDefinitionsList1B").part1}</strong> -{" "}
                    {t("usedDefinitionsList1B").part2}
                  </li>
                  <li>
                    <strong>{t("usedDefinitionsList1C").part1}</strong> -{" "}
                    {t("usedDefinitionsList1C").part2}
                  </li>
                  <li>
                    <strong>{t("usedDefinitionsList1D").part1}</strong> -{" "}
                    {t("usedDefinitionsList1D").part2}
                  </li>
                  <li>
                    <strong>{t("usedDefinitionsList1E").part1}</strong> -{" "}
                    {t("usedDefinitionsList1E").part2}
                  </li>
                  <li>
                    <strong>{t("usedDefinitionsList1F").part1}</strong> -{" "}
                    {t("usedDefinitionsList1F").part2}
                  </li>
                  <li>
                    <strong>{t("usedDefinitionsList1G").part1}</strong> -{" "}
                    {t("usedDefinitionsList1G").part2}
                  </li>
                  <li>
                    <strong>{t("usedDefinitionsList1H").part1}</strong> -{" "}
                    {t("usedDefinitionsList1H").part2}
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>{t("genralStateH3")}</h3>
            <ol>
              <li>{t("generalStateList1")}</li>
              <li>{t("generalStateList2")}</li>
              <li>{t("generalStateList3")}</li>
              <li>{t("generalStateList4")}</li>
              <li>{t("generalStateList5")}</li>
            </ol>
          </li>
          <li>
            <h3>{t("technicalH3")}</h3>
            <ol>
              <li>{t("technicalList1")}</li>
              <li>
                {t("technicalList2")}
                <ol type="a">
                  <li>{t("technicalList2A")}</li>
                  <li>{t("technicalList2B")}</li>
                </ol>
              </li>
              <li>{t("technicalList3")}</li>
              <li>{t("technicalList4")}</li>
              <li>{t("technicalList5")}</li>
              <li>{t("technicalList6")}</li>
              <li>{t("technicalList7")}</li>
            </ol>
          </li>
          <li>
            <h3>{t("usingH3")}</h3>
            <ol>
              <li>{t("usingList1")}</li>
              <li>{t("usingList2")}</li>
              <li>{t("usingList3")}</li>
              <li>{t("usingList4")}</li>
              <li>{t("usingList5")}</li>
              <li>
                {t("usingList6")}
                <ol type="a">
                  <li>{t("usingList6A")}</li>
                  <li>{t("usingList6B")}</li>
                  <li>{t("usingList6C")}</li>
                </ol>
              </li>
              <li>
                {t("usingList7")}
                <ol type="a">
                  <li>{t("usingList7A")}</li>
                  <li>{t("usingList7B")}</li>
                  <li>{t("usingList7C")}</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>{t("licenseH3")}</h3>
            <ol>
              <li>{t("licenseList1")}</li>
              <li>{t("licenseList2")}</li>
              <li>{t("licenseList3")}</li>
              <li>
                {t("licenseList4")}
                <ol type="a">
                  <li>{t("licenseList4A")}</li>
                  <li>{t("licenseList4B")}</li>
                  <li>{t("licenseList4C")}</li>
                  <li>{t("licenseList4D")}</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>{t("personalH3")}</h3>
            <p>{t("paragraph2")}</p>
          </li>
          <li>
            <h3>{t("complaintH2")}</h3>
            <ol>
              <li>{t("complaintList1")}</li>
              <li>{t("complaintList2")}</li>
              <li>{t("complaintList3")}</li>
            </ol>
          </li>
          <li>
            <h3>{t("endingH3")}</h3>
            <ol>
              <li>{t("endingList1")}</li>
              <li>{t("endingList2")}</li>
              <li>{t("endingList3")}</li>
              <li>
                {t("endingList4")}
                <ol type="a">
                  <li>{t("endingList4A")}</li>
                  <li>{t("endingList4B")}</li>
                  <li>{t("endingList4C")}</li>
                  <li>{t("endingList4D")}</li>
                  <li>{t("endingList4E")}</li>
                  <li>{t("endingList4F")}</li>
                  <li>{t("endingList4G")}</li>
                </ol>
              </li>
              <li>{t("endingList5")}</li>
              <li>{t("endingList6")}</li>
              <li>{t("endingList7")}</li>
            </ol>
          </li>
        </ol>
        {/* <h3>{t("attachmentH3")}</h3>
      <p>{t("adress")}</p>
      <p>{t("paragraph3")}</p>
      <p>
        {t("dateSign")} <br /> {t("email")}
      </p> */}
      </StyledTermsOfUse>
    </>
  );
}
