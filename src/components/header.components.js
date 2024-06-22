import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../hook/useCart';

const HeaderComponent = () => {

  const { cartCount } = useCart();

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" >
      <Navbar.Brand style={{paddingLeft:"1em"}} as={Link} to="/">Mobile Store</Navbar.Brand>
      <Nav className="me-auto" >
        <a style={{color: "white"}}>Agregados en Carrito {cartCount}</a>
      </Nav>
    </Navbar>
  );
};

export default HeaderComponent;