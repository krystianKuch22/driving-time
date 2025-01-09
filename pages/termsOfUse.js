import Wrapper from "@/components/layout/wrapper/Wrapper";
import TermsOfUse from "@/components/sections/termsOfUse/TermsOfUse";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
  const { t, changeLanguage, language } = useLanguage();

  return (
    <Wrapper>
        <TermsOfUse/>
    </Wrapper>
  );
}
