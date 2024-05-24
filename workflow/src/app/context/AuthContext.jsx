"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest } from "../api/auth";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthen, setIsAuthen] = useState(false);
  const [errors, setErrors] = useState([]);

  const singin = async (user) => {
    try {
      const res = await loginRequest(user);
      setIsAuthen(true);
      setUser(res.data);
      console.log("Hay acceso al sistema");
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales incorrectas. Por favor, inténtelo de nuevo.',
      });
      console.log("No Hay acceso al sistema");
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, singin, isAuthen }}>
      {children}
    </AuthContext.Provider>
  );
};
