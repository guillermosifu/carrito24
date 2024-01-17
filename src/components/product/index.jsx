import React from 'react'

const Product = (props) => {
    const {item,agregarAlCarrito}= props;
  return (

    <div className='card'>
        <img src={item.image} className='card-img-top product-image' alt="imagen" />
        <div className='card-body'>
       <h5 className='card-text product-title' title={item.title}>{item.title}</h5>
       <h5 className='card-text product-description' title={item.description}>{item.description}</h5>

       <button className='btn btn-sm btn-primary'>Ver Producto</button>
       <button className='btn btn-sm btn-warning' onClick={()=>{
        agregarAlCarrito(item)
       }}>Agregar</button>
        </div>

    </div>
  )
}

export default Product;