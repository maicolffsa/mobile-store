import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = ({ product, onAddToCart }) => (
  
  <Container style={{paddingTop: "30px"}}>
  <Row>
      <Col md={6}>
          <Image src={product.imgUrl} style={{height: "200px"}} fluid />
      </Col>
      <Col md={6}>
          <h2> {product.brand} {product.model}</h2>
          <p>{product.description}</p>
          <h3>S/.{product.price} </h3>
          <Form>
              <Form.Group controlId="colorSelect">
                  <Form.Label>Color</Form.Label>
                  <Form.Control as="select">
                      {product?.colorOptions?.map(color => (
                          <option key={color.code} value={color.code}>{color.name}</option>
                      ))}
                  </Form.Control>
              </Form.Group>
              <Form.Group controlId="storageSelect">
                  <Form.Label>Almacenamiento</Form.Label>
                  <Form.Control as="select">
                      {product?.storageOptions?.map(storage => (
                          <option key={storage.code} value={storage.code}>{storage.size}</option>
                      ))}
                  </Form.Control>
              </Form.Group>
              <Button variant="primary" onClick={onAddToCart}>Añadir al carrito</Button>
          </Form>
          <Link to="/">Volver al listado de productos</Link>
      </Col>
  </Row>
</Container>
  );
  
  export default ProductDetails;