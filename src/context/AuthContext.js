import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "tu_usuario",
    nombre: "Usuario Instagram",
    bio: "¡Hola! Estoy usando el clon de Instagram.",
    isLoggedIn: true,
  });

  const toggleLogin = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isLoggedIn: !prevUser.isLoggedIn,
    }));
  };
  return (
    <AuthContext.Provider value={{ user, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};