import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { CategoriesPage } from "./Components/CategoriesPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/trending" element={<Home />} />
    </Routes>
  );
};
