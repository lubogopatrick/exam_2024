import { useState } from "react";
// import { useEffect } from "react";
import { createContext } from "react";
import React from "react";

import SHOP_DATA from "../shopdata";

export const CategoriesContext = createContext({
  CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [products ] = useState(SHOP_DATA);
         // ,setCategoriesMap


  const value = { products };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
