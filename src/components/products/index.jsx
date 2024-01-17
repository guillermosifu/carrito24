import axios from "axios";
import { URL_API_STORE } from "../../constants";
import { useState, useEffect } from "react";

import React from "react";

const Products = () => {
const[productos,setProductos]=useState([]);
const[limit,setLimit]=useState(5);
const[loading,setLoading]=useState(true)

const getProducts = async()=>{
    const response = await axios.get(
        `${URL_API_STORE}/products?limit=${limit}`
    );

    setProductos(response.data);
    setLoading(false)
};

console.log('response')

useEffect(()=>{
console.log('ejcutando effect')
getProducts()
},[limit])




  return <div>Products</div>;
};

export default Products;
