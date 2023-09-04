import { useContext } from "react";
import { myProContext } from "./ProductProvider";

const ProductContext = function () {
  const { products, setProducts, cart, setCart } = useContext(myProContext);

  console.log("myProContext değeri:", products, setProducts, cart, setCart);
};
export default ProductContext;
