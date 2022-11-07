import React, { createContext, useContext, useReducer, useState } from "react";
import { products } from "../utils/products";
import { reducer } from "./reducer";

const ProductsContext = createContext();
export const Product = () => useContext(ProductsContext);

const ProductProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, {
      product: products,
      cart: []
   });
   return (
      <ProductsContext.Provider value={{ state, dispatch }}>
         {children}
      </ProductsContext.Provider>
   );
};

export default ProductProvider;