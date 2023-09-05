import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const removeCart = (id) => {
    const filtered = cart.filter((c) => c.id !== id);
    setCart(filtered);
  };

  const addProductToCart = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
    console.log("Sepete eklenen ürün: ", item);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProductToCart,
        setProducts,
        cart,
        setCart,
        removeCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
