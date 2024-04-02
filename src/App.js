import React, { useState } from "react";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    // <div>
    //   <Admin />
    //   <Auth/>
    // </div>

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
