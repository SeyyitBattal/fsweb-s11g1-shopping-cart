import React, { useContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductProvider";

function App() {
  //mevcut tüm ürünleri takip etmek için "products" ve tüm sepetteki ürünleri tutacak bir "cart" statei.
  const { setProducts } = useContext(ProductContext);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="App">
      <Navigation />
      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>
    </div>
  );
}

export default App;
