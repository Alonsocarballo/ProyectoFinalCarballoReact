import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "products");
        let queryRef = collectionRef;

        if (categoryId) {
          queryRef = query(collectionRef, where("category", "==", categoryId));
        }

        const snapshot = await getDocs(queryRef);
        const productsAdapted = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsAdapted);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {categoryId && <h2>{categoryId}</h2>}
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;


