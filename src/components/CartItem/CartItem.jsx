import React from "react";
import Button from 'react-bootstrap/Button';
import './CartItem.css';



const CartItemDetail = ({ id, name, price, quantity, removeItem }) => {
  const total = price * quantity;

  return (
    <div className="CartItemCont">
      <h4>{name}</h4>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Total: ${total}</p>     
      <Button onClick={() => removeItem(id)}>Remover</Button>
    </div>
    
  );
};

export default CartItemDetail;
