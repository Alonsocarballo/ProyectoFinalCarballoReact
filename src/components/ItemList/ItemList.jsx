import Card from 'react-bootstrap/Card';
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="container" style={{ background: '#f2f2f2', padding: '20px' }}>
      <div className="row">
        {products.map(prod => (
          <div key={prod.id} className="col-md-4 mb-4">
            <Item {...prod} />
            <Card style={{ width: '18rem', background: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img variant="top" src={products.find(item => item.id === prod.id).image} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;



