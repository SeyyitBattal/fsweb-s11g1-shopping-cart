import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [card, setCard] = useState([]);

  const addProductToCard = (item) => {
    // verilen itemi sepete ekleyin
    setCard([...card, item]);
    console.log("Sepete eklenen ürün: ", item);
  };

  return (
    <ProductContext.Provider
      value={{ products, addProductToCard, setProducts, card, setCard }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
