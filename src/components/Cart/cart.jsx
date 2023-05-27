import React, { useContext } from "react";
import { CartContext } from "../Context/CartContex";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Button } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>No hay Productos en el Carrito</h1>
        <Link to="/" className="option">
          <Button> Volver a la Pagina Principal</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} removeItem={removeItem} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: {calculateTotal()}</h3>
        <div className="cart-buttons">
          <Button onClick={clearCart} className="Button">
            Limpiar el Carrito
          </Button>
          <Link to="/Checkout" className="option">
            <Button variant="primary" className="checkoutCa" >Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;




