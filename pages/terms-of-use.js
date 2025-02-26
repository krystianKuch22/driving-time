import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import Wrapper from "@/components/layout/wrapper/Wrapper";
import TermsOfUseSection from "@/components/sections/termsOfUseSection/TermsOfUseSection";

export default function TermsOfUse() {
  return (
    <>
    <Header/>
    <Wrapper> 
      <TermsOfUseSection />
    </Wrapper>
    <Footer/>
    </>
  );
}
