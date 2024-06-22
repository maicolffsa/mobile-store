import React, { useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';
import {addToCart } from '../api';
import { useCart } from '../hook/useCart';
import ProductDetails from '../components/productDetails.components';
//rafce
const ProductDetailsPage = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const productID = location.pathname.split("/")[2]

    const [product, setProducts] = useState([])

    console.log(location.pathname.split("/")[2])

    const { addItemToCart } = useCart();
    const handleAddToCart = () => {
        addToCart({ id: product.id, colorCode: 1, storageCode: 2 }).then((response) => {
          addItemToCart();
        });
      };

    const fetchAllProducts = async ()=>{
        try {
          const res = await api.get("/api/product/"+productID)  
          setProducts(res.data)
          console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        
        fetchAllProducts()
        },[])
   
console.log(product)
  return (
  

    <ProductDetails product={product} onAddToCart={handleAddToCart}  />
  )
}

export default ProductDetailsPage

