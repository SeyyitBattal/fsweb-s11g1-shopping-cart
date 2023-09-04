import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { ProductContext } from "../contexts/ProductProvider";

const Navigation = (props) => {
  const { card } = useContext(ProductContext);
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{card.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
