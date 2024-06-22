import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const ProductItem = ({ product }) => (
  <Card style={{ height:"420px", marginLeft: "5px", marginRight: "5px", marginTop: "10px", marginBottom: "10px"}}>
                    <Card.Img variant="center" style={{height: "200px"}} src={product.imgUrl} />
                    <Card.Body>
                        <Card.Title style={{height: "60px"}}>{product.brand} {product.model}</Card.Title>
                        <Card.Text>S/. {product.price}</Card.Text>
                        <Link to={`/product/${product.id}`}>Ver detalles</Link>
                    </Card.Body>
  </Card>
);

export default ProductItem;