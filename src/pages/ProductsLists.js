import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api';
import ProductItem from '../components/ProductItem.components';
import SearchBar from '../components/SearchBar.components';

//rafce
const Products = () => {

const [products, setProducts] = useState([])
const [searchTerm, setSearchTerm] = useState('');


const fetchAllProducts = async ()=>{
  try {
    const res = await api.get("/api/product")  
    setProducts(res.data)
    console.log(res)
  }catch(err){
      console.log(err)
  }
}

useEffect(()=>{
fetchAllProducts()
},[])

const filteredProducts = products.filter(product =>
  product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.model.toLowerCase().includes(searchTerm.toLowerCase())
);

const handleDelete = async (id)=>{
    try{
    await api.delete("/products/"+id)
    window.location.reload()
    }catch(err){
        console.log(err)
    }
}

  return (

    <div>
     

      <Container>

      <Row style={{alignContent: "flex-end", alignItems: "flex-end", paddingTop: "15px", paddingBottom: "10px"}}>
      <Col xs={12} sm={3} md={3} lg={3}></Col>
      <Col xs={12} sm={3} md={3} lg={3}></Col>
      <Col xs={12} sm={2} md={3} lg={3}></Col>

      <Col xs={12} sm={3} md={3} lg={3}>
      <SearchBar onSearch={setSearchTerm} />
       </Col>
      </Row>

      <Row>
          {filteredProducts.map(product => (
              <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <ProductItem product={product}/>
              </Col>
          ))}
      </Row>
  </Container>
    </div>
   

  )
}

export default Products
