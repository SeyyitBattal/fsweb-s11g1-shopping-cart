import { createContext, useState } from "react";
import { data } from "../data";
import addItem from "../App";

export const myProContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  return (
    <myProContext.Provider value={{ products, addItem }}>
      {children}
    </myProContext.Provider>
  );
};

export default ProductProvider;
