import React, { useContext } from 'react';
import cartIcon from './assets/carritoCompra.svg';
import { CartContext } from '../Context/CartContex';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);


  return (
    <Link to="/cart" className="CartWidget" style={{ textDecoration: "none" }}>
      <div className="CartWidget__icon">
        <img src={cartIcon} alt="cart-widget" />
      </div>
      <div className="CartWidget__quantity">{totalQuantity}</div>
    </Link>
  );
};

export default CartWidget;

