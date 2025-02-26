import { useState } from "react";
import { StyledRegisterForm } from "./RegisterForm.style";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    schoolName: "",
    street: "",
    postCode: "",
    city: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    // Walidacja schoolName
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "Nazwa szkoły jest wymagana.";
    }

    // Walidacja email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Podaj poprawny adres email.";
    }

    // Walidacja password
    if (!formData.password) {
      newErrors.password = "Hasło jest wymagane.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Hasło musi mieć co najmniej 8 znaków.";
    }

    // Walidacja repeatPassword
    if (!formData.repeatPassword) {
      newErrors.repeatPassword = "Musisz powtórzyć hasło.";
    } else if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "Hasła nie są identyczne.";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Musisz zaakceptować warunki umowy.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Zwraca true, jeśli brak błędów
  };

  let formComplete =
    formData.schoolName.length != 0 &&
    formData.email.length != 0 &&
    formData.password.length != 0 &&
    formData.acceptTerms;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const verifiedData = {
        schoolName: formData.schoolName,
        email: formData.email,
        password: formData.password,
      };
      setFormData({
        schoolName: "",
        street: "",
        postCode: "",
        city: "",
        email: "",
        phone: "",
        password: "",
        repeatPassword: "",
        acceptTerms: false,
      });

      setSending(true);

      try {
        const response = await fetch(
          "https://api-dev.limbaapp.usermd.net/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(verifiedData),
          }
        );

        const data = await response.json();

        console.log(data)

        if (!response.ok) {
          throw new Error(data.message || "Coś poszło nie tak");
        }

        alert("Rejestracja zakończona sukcesem!");
      } catch (error) {
        alert(error.message);
      } finally {
        setSending(false);
      }

      console.log("Formularz poprawnie przesłany:", verifiedData);
    } else console.log("Błąd w formularzu");
  };
  console.log(errors);

  return (
    <StyledRegisterForm onSubmit={handleSubmit} method="POST">
      <label>
        <input
          placeholder="Nazwa szkoły*"
          type="text"
          id="schoolName"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
        />
        {errors.schoolName && (
          <span className="error">{errors.schoolName}</span>
        )}
      </label>
      {/* <label>
        <input
          placeholder="Ulica*"
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </label>
      <div className="box1">
        <label className="first">
          <input
            placeholder="Kod pocztowy*"
            type="text"
            id="postCode"
            name="postCode"
            value={formData.postCode}
            onChange={handleChange}
            required
          />
        </label>
        <label className="second">
          <input
            placeholder="Miasto*"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
      </div> */}
      <div className="box2">
        <label>
          <input
            placeholder="e-mail*"
            type="email"
            id="regEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        {/* <label>
          <input
            placeholder="numer telefonu*"
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label> */}
      </div>
      <div className="box2">
        <label>
          <input
            placeholder="hasło*"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <label>
          <input
            placeholder="powtórz hasło*"
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />
          {errors.repeatPassword && (
            <span className="error">{errors.repeatPassword}</span>
          )}
        </label>
      </div>
      <p className="small-text">*wymagane uzupełnienie</p>
      <label className="checkbox-container">
        <div>
          <input
            type="checkbox"
            name="acceptTerms"
            value={formData.acceptTerms}
            checked={formData.acceptTerms}
            onChange={handleChange}
          />
          {errors.acceptTerms && (
            <span className="errorTerms">{errors.acceptTerms}</span>
          )}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus
          odio a euismod ullamcorper. Duis quis venenatis mi. Proin porta sem id
          libero mattis aliquet.
        </p>
      </label>
      <div className="btn-container">
        <button type="submit" disabled={!formComplete}>
          Zarejestruj się
        </button>
      </div>
    </StyledRegisterForm>
  );
}
