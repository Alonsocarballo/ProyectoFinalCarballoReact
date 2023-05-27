import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './CheckoutForm.css'


const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className="Form">
        <div className="FormGroup">
          <label className="Label">
            Nombre
            <input
              type="text" placeholder=" Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="FormGroup">
          <label className="Label">
            Teléfono
            <input
              type="text" placeholder=" Telefono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
        <div className="FormGroup">
          <label className="Label">
            Email
            <input
              type="email" placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <Button type="submit">Confirmar</Button>
      </form>
    </div>
  );
};

export default CheckoutForm;


