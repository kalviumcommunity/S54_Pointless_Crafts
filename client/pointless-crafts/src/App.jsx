import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { AppRoutes } from "./Routes";
import { AddEntityForm } from "./Components/AddEntityForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // logic for handling login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // logic for handling logout
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <NavBar
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <AppRoutes
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      {/* <AddEntityForm /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
