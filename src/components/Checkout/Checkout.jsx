import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContex";
import { Timestamp, collection, writeBatch, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const order = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total !== undefined ? total : 0, 
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(
          productsRef,
          where(
            "id",
            "in",
            cart.map((prod) => prod.id)
          )
        )
      );

      productsAddedFromFirestore.forEach((doc) => {
        const product = doc.data();
        const item = cart.find((item) => item.id === doc.id);
        const stock = product.stock;

        if (stock >= item.quantity) {
          batch.update(doc.ref, { stock: stock - item.quantity });
        } else {
          outOfStock.push({ id: doc.id, ...product });
        }
      });

      if (outOfStock.length === 0) {
        const ordersRef = collection(db, "orders");
        const newOrderRef = await addDoc(ordersRef, order);
        batch.commit();

        setOrderId(newOrderRef.id);
        clearCart();
      } else {
        console.log("Productos sin stock:", outOfStock);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderId) {
    return <h1>El ID de su orden es {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
