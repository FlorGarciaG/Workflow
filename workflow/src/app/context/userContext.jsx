"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest } from "../api/auth";

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, singin, isAuthen }}>
      {children}
    </AuthContext.Provider>
  );
};
