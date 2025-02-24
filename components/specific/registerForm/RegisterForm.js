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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(formData);

  return (
    <StyledRegisterForm action="/" method="POST">
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
      </label>
      <label>
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
      </div>
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
        </label>
        <label>
          <input
            placeholder="numer telefonu*"
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
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
        </label>
      </div>
      <p className="small-text">*wymagane uzupełnienie</p>
      <label>
        <input
          type="checkbox"
          name="agree"
          value={formData.acceptTerms}
          onChange={handleChange}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus
          odio a euismod ullamcorper. Duis quis venenatis mi. Proin porta sem id
          libero mattis aliquet.
        </p>
      </label>
      <button type="submit">Zarejestruj się</button>
    </StyledRegisterForm>
  );
}
