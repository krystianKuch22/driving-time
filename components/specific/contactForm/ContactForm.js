import { useState } from "react";
import { StyledContactForm } from "./ContactForm.style";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setFormData({ name: "", email: "", message: "" });
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  console.log(formData);

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <h2>Kontakt</h2>
      <div className="userData">
        <label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Imię*"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e-mail*"
            value={formData.email}
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
          required
        ></textarea>
      </label>
      <div className="info-container">
        <div className="checkbox-container">
          <p>*wymagane uzupełnienie</p>
          <label>
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
          </label>
        </div>
        <button type="submit">Wyślij</button>
      </div>
      <p>{status}</p>
    </StyledContactForm>
  );
}
