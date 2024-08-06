import React, { useEffect, useState } from "react";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import { toast } from "react-toastify";
import api from "./config/URL";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAdminFromStorage = sessionStorage.getItem("isAuthenticated");
    const isAdminBoolean = isAdminFromStorage === "true";
    if (isAuthenticated !== isAdminBoolean) {
      setIsAuthenticated(isAdminBoolean);
    }

    const interceptor = api.interceptors.response.use(
      (response) => response,

      (error) => {
        console.log("Error is", error.response);
        if (error.response?.status === 401) {
          toast.warning("Session Experied!! Please Login");
          handleLogout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleLogin = (email, password) => {
  //   try {
  //     let userName;
  //     switch (email) {
  //       case "superadmin@ecsaccounts.sg":
  //         if (password === "12345678") {
  //           userName = "Super Admin";
  //         }
  //         break;
  //       case "admin@ecsaccounts.sg":
  //         if (password === "12345678") {
  //           userName = "Admin";
  //         }
  //         break;
  //       case "employee@ecsaccounts.sg":
  //         if (password === "12345678") {
  //           userName = "Employee";
  //         }
  //         break;

  //       default:
  //         return toast.error("Invalid email or password");
  //     }
  //     if (userName) {
  //       setIsAuthenticated(true);
  //       sessionStorage.setItem("isAuthenticated", true);
  //       sessionStorage.setItem("userName", userName);
  //     } else {
  //       toast.error("Invalid email or password");
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //   }
  // };

  const handleLogin = async () => {
    // setIsLoading(true);
    setIsAuthenticated(true);
    sessionStorage.setItem("isAuthenticated", true);
    // try {
    //   if (id) {
    //     const response = await api.get(`/getAllRoleInfoById/${id}`);
    //     const rolePermissions = response.data;
    //     updateScreens(rolePermissions);
    //     setIsAuthenticated(true);
    //     sessionStorage.setItem("isAuthenticated", true);
    //     // sessionStorage.setItem("userName", userName);
    //   } else {
    //     setIsLoading(false);
    //     toast.error("Invalid email or password");
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("screens");
    sessionStorage.removeItem("roleId");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("loginUserId");
    sessionStorage.removeItem("centerId");
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
