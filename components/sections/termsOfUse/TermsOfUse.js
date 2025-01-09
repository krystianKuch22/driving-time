import { useLanguage } from "@/context/LanguageContext";
import { StyledTermsOfUse } from "./TermsOfUse.style";

export default function TermsOfUse() {
  const { t } = useLanguage('gggg');

  return <StyledTermsOfUse>
    <h1>{t('termsOfUseH1')}</h1>

  </StyledTermsOfUse>;
}
