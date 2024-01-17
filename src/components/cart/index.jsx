import React from "react";
import './styles.css'

const Cart = (props) => {
  const { carrito, eliminarDelCarrito } = props;

  return (
    <ul className="list-group">
      {carrito.map((product) => {
        return (
          <li
            key={product.id}
            className="list-group-item d-flex cart-item align-items-center"
          >
            <img src={product.image} alt="" className="cart-item-img " />
            <div>
              <p className="mb-0">
                <strong>{product.title}</strong>
              </p>
              <div className="d-flex justify-content-between">
                <p>{product.cant}</p>
                <p>S/ {product.cant * product.price}</p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => eliminarDelCarrito(product.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;
