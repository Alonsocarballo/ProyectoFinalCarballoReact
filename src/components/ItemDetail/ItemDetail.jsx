import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContex";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({ id, name, img, category, descripcion, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
      category,
    };

    addItem(item, quantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>

      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripcion {descripcion}</p>
        <p className="Info">Precio: {price}</p>
        <p className="Info">ID {id}</p>
      </section>
      <footer className="ItemFooter">{
        quantityAdded >0?( 
            <Link to ='/cart' className="option>"> 
                <Button variant="primary">Terminar Compra</Button>
            </Link>

        ) :(
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
      }


      </footer>
      
      <p>Cantidad Agregada: {quantityAdded}</p>
    </article>
  );
};

export default ItemDetail;





