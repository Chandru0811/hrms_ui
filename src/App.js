import React, { useEffect, useState } from "react";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import { toast } from "react-toastify";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticatedFromStorage =
      sessionStorage.getItem("isAuthenticated");
    if (isAuthenticatedFromStorage === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    try {
      let userName;
      switch (email) {
        case "superadmin@ecsaccounts.sg":
          if (password === "12345678") {
            userName = "Super Admin";
          }
          break;
        case "admin@ecsaccounts.sg":
          if (password === "12345678") {
            userName = "Admin";
          }
          break;
        case "employee@ecsaccounts.sg":
          if (password === "12345678") {
            userName = "Employee";
          }
          break;

        default:
          return toast.error("Invalid email or password"); // Default to ID 3 for other users
      }
      if (userName) {
        setIsAuthenticated(true);
        sessionStorage.setItem("isAuthenticated", true);
        sessionStorage.setItem("userName", userName);
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userName");
  };

  return (
    <div>
      {isAuthenticated ? (
        <Admin handleLogout={handleLogout} />
      ) : (
        <Auth handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
