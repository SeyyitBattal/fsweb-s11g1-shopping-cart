import { createContext, useState } from "react";
import { data } from "../data";

export const myProContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  return (
    <myProContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </myProContext.Provider>
  );
};

export default ProductProvider;
