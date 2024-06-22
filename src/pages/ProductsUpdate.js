import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../api';
//rafce
const ProductUpdate = () => {


    const [product, setProduct] = useState({
        brand: "",
        model: "",
        price: 0,
        cover: ""
    });

    const navigate = useNavigate()

    const location = useLocation()

    const productID = location.pathname.split("/")[2]

    console.log(location.pathname.split("/")[2])

    const handleChange = (e) => {
        setProduct(prev=>({...prev, [e.target.name]: e.target.value }));
    };

   const handleClick = async e =>{
    e.preventDefault()
    try{
        await api.put("/api/product/"+ productID, product)
        navigate("/")
    }catch(err){
        console.log(err)
    }
   }
console.log(product)
  return (
    <div className='form'>
   <h1>Update Book</h1>
   <input type="text" placeholder="title" onChange={handleChange} name="title"/>
   <input type="text" placeholder="description" onChange={handleChange} name="description"/>
   <input type="number" placeholder="price" onChange={handleChange} name="price"/>
   <input type="text" placeholder="cover" onChange={handleChange} name="imgUrl"/>
   <button onClick={handleClick} className='updateButton'>
   Update
   </button>
    </div>
  )
}

export default ProductUpdate

