import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { CategoriesPage } from "./Components/CategoriesPage";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
