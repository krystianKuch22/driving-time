import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import LoadingScreen from "@/components/layout/loading/LoadingScreen";
import DeleteSection from "@/components/sections/deleteSection/DeleteSection";
import DeleteForm from "@/components/specific/deleteForm/DeleteForm";
import { useLanguage } from "@/hooks/useLanguage";

export default function DeleteAccount() {
  const { t, loading } = useLanguage("common");
  if(loading){
    <LoadingScreen $loading={loading}/>
  }
  return (
    <>
      <Header />
      <DeleteSection>
        <DeleteForm />
      </DeleteSection>
      <Footer language={t} />
    </>
  );
}
