import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import Wrapper from "@/components/layout/wrapper/Wrapper";
import PolicySection from "@/components/sections/policySection/PolicySection";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <Wrapper>
        <PolicySection />
      </Wrapper>
      <Footer />
    </>
  );
}
