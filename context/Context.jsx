"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useContext, useState } from "react";

const dataContext = React.createContext();
export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const pathname = usePathname();
  const [isDark, setisDark] = useState(true);

  const toggleDark = (value) => {
    if (value) {
      document.documentElement.classList.add("uc-dark");
    } else {
      document.documentElement.classList.remove("uc-dark");
    }
  };

  useEffect(() => {
    const getBooleanValue = (key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : false; // Default to false if the value is not found
    };

    const savedValue = getBooleanValue("isDark");
    toggleDark(savedValue);
    setisDark(savedValue);
  }, []);

  const handleToggle = () => {
    const saveBooleanValue = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    };
    const newValue = !isDark;
    setisDark(newValue);
    saveBooleanValue("isDark", newValue);
    toggleDark(newValue);
  };

  const contextElement = {
    isDark,
    handleToggle,
  };

  useEffect(() => {
    if (isDark) {
      document.querySelector(".page-wrapper")?.classList.add("uc-dark");
    } else {
      document.querySelector(".page-wrapper")?.classList.remove("uc-dark");
    }
  }, [pathname, isDark]);

  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
