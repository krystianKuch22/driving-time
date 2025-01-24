import { useState } from "react";
import { StyledContactForm } from "./ContactForm.style";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <div className="userData">
        <label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Imię"
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
            placeholder="E-mail"
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
      <button type="submit">Wyślij</button>
      <p>{status}</p>
    </StyledContactForm>
  );
}
