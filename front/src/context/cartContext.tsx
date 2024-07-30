'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuth } from './authContext';
import IProduct, { cartContext, cartProps } from '@/types';

const CartContext = createContext<cartContext | undefined>(undefined);

export const CartProvider: React.FC<cartProps> = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    if (user) {
      const cartStorage = localStorage.getItem(`cart_${user.id}`);
      if (cartStorage) {
        setCart(JSON.parse(cartStorage));
      } else {
        setCart([]);
      }
    } else {
      setCart([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }
  return context;
};