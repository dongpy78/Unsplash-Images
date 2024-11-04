import { createContext, useContext, useState, useEffect } from "react";

//! Tạo một ngữ cảnh mới với createContext
const AppContext = createContext();

//! Tạo một provider để cung cấp ngữ cảnh cho các component con
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
    console.log(body);
    console.log(body);
  };

  //! Sử dụng AppContext.Provider để cung cấp giá trị cho các component con
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

//! Tạo một hook tùy chỉnh để sử dụng ngữ cảnh dễ dàng hơn
export const useGlobalContext = () => useContext(AppContext);
