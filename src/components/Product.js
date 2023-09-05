import React, { useContext } from "react";
import { ScProduct } from "./scParts";
import { ProductContext } from "../contexts/ProductProvider";

const Product = (props) => {
  const { addProductToCart } = useContext(ProductContext);
  return (
    <ScProduct>
      <img src={props.product.image} alt={`${props.product.title} book`} />
      <div className="details">
        <h1 className="title">{props.product.title}</h1>
        <div className="footer">
          <p className="price">${props.product.price}</p>
          <button onClick={() => addProductToCart(props.product)}>
            Add to cart
          </button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
