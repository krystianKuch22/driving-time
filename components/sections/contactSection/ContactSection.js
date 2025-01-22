import ContactForm from "@/components/specific/contactForm/ContactForm";
import { StyledContactSection } from "./ContactSection.style";

export default function ContactSection() {
  return (
    <StyledContactSection>
        <h2>Skontaktuj się z nami!</h2>
      <ContactForm />
    </StyledContactSection>
  );
}
