'use client';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string, user: any) => void;
  logout: () => void;
  token: string | null;
  user: any | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageToken = localStorage.getItem("token");
      const storageUser = localStorage.getItem("user");

      if (storageToken && storageUser) {
        try {
          const parsedUser = JSON.parse(storageUser);
          setToken(storageToken);
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (e) {
          console.error("Failed to parse user from localStorage", e);
          localStorage.removeItem("user");
        }
      }
    }
  }, []);

  const login = (token: string, user: any) => {
    setIsAuthenticated(true);
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem(`cart_${user.id}`, JSON.stringify([])); // Limpiar el carrito al iniciar sesión
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('cart'); // Limpiar el carrito
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};