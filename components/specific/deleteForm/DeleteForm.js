import { useState } from "react";
import { StyledDeleteForm } from "./DeleteForm.style";

export default function DeleteForm() {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <StyledDeleteForm action="POST">
      <div className="accountDelete">
        <h1>Usuń konto</h1>
        <label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Hasło"
            value={formData.pass}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Usuń konto</button> 
        
      </div>
    </StyledDeleteForm>
  );
}
