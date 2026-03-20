"use client";
import React, { useState } from "react";

export default function Pagination() {
  const [activePage, setActivePage] = useState(2); // Default active page

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <ul>
       
    </ul>
  );
}
