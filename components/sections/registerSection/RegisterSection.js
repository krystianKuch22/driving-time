import Image from "next/image";
import { StyledRegisterSection } from "./RegisterSection.style";
import RegisterForm from "@/components/specific/registerForm/RegisterForm";

export default function RegisterSection() {
  return (
    <StyledRegisterSection id="registerSection">
      <div className="main-container">
        <div className="text-container">
          <h2>Zarejestruj swoją szkołę już dziś</h2>
          <div className="paragraph">
            <div className="img-box">
              <Image
                src="/png/send.png"
                alt="Image of home"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p>Zarejestruj swoją szkołę – wystarczy podać nazwę i email!</p>
          </div>
          <div className="paragraph">
            <div className="img-box">
              <Image
                src="/png/calendar.png"
                alt="Image of home"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p>
              Porozmawiajmy o współpracy! Skontaktujemy się z Tobą, żeby ustalić
              szczegóły.
            </p>
          </div>
          <div className="paragraph">
            <div className="img-box">
              <Image
                src="/png/chat.png"
                alt="Image of home"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p>
              Z przyjemnością usprawnimy Twoją pracę i wprowadzimy funkcje,
              które naprawdę Ci się przydadzą!
            </p>
          </div>
        </div>

        <div className="form-container">
          <RegisterForm />
        </div>
      </div>
    </StyledRegisterSection>
  );
}
