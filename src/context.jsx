import { createContext, useContext, useState, useEffect } from "react";

//! Tạo một ngữ cảnh mới với createContext
const AppContext = createContext();

//! Tạo một provider để cung cấp ngữ cảnh cho các component con
export const AppProvider = ({ children }) => {
  const greeting = "hello";
  //! Sử dụng AppContext.Provider để cung cấp giá trị cho các component con
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

//! Tạo một hook tùy chỉnh để sử dụng ngữ cảnh dễ dàng hơn
export const useGlobalContext = () => useContext(AppContext);
