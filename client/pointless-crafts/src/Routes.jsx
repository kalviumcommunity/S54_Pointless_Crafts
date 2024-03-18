import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { CategoriesPage } from "./Components/CategoriesPage";
import { MainPage } from "./Components/MainPage";
import { AddEntityForm } from "./Components/AddEntityForm";

export const AppRoutes = ({ isLoggedIn, handleLogin, handleLogout }) => {
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <MainPage /> : <Home />} />
      {/* <Route path="/home" element={<MainPage />} /> */}
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/trending" element={<Home />} />
      <Route path="/post-hacks" element={<AddEntityForm/>} />
    </Routes>
  );
};
