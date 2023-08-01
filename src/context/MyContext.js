import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  // const [currentPage, setCurrentPage] = useState(1);

  const contextValues = {
    // currentPage,
    // setCurrentPage,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
