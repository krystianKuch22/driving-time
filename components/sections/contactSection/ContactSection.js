import ContactForm from "@/components/specific/contactForm/ContactForm";
import { StyledContactSection } from "./ContactSection.style";

export default function ContactSection() {
  return (
    <StyledContactSection>
        <h2>Napisz do nas, jeśli chcesz zacząć korzystać z oprogramowania.</h2>
      <ContactForm />
    </StyledContactSection>
  );
}
