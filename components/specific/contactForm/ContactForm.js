import { useState } from "react";
import { StyledContactForm } from "./ContactForm.style";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // Walidacja email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Podaj poprawny adres email.";
    }

    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Międzynarodowy format E.164
    if (!phoneRegex.test(formData.phone)) {
      setErrors("Nieprawidłowy numer telefonu.");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Zwraca true, jeśli brak błędów
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();
    console.log(errors);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ phone: "", email: "", message: "" });
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <h2>Napisz do nas aby korzystać już dzisiaj!</h2>
      <div className="userData">
        <label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="^\+?[1-0]\d{1,14}$"
            placeholder="Numer telefonu"
            minLength={9}
            maxLength={15}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <label>
        <textarea
          id="message"
          name="message"
          placeholder="Wiadomość"
          value={formData.message}
          onChange={handleChange}
          maxLength={500}
          required
        ></textarea>
      </label>
      <div className="info-container">
        <div className="checkbox-container">
          {/* <p>*wymagane uzupełnienie</p> */}
          {/* <label>
            <div>
              <input
                type="checkbox"
                name="agree"
                id="agree"
                value={formData.agree}
                onChange={handleChange}
                require
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              luctus odio a euismod ullamcorper. Duis quis venenatis mi. Proin
              porta sem id libero mattis aliquet.
            </p>
          </label> */}
        </div>
        <button type="submit">Wyślij</button>
      </div>
      {/* <p>{status}</p> */}
    </StyledContactForm>
  );
}
