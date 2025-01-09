import Wrapper from "@/components/layout/wrapper/Wrapper";
import PolicySection from "@/components/sections/policySection/PolicySection";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
  const { t, changeLanguage, language } = useLanguage();

  return (
    <Wrapper>
      <PolicySection/>
    </Wrapper>
  );
}
