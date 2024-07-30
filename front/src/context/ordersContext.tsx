'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuth } from './authContext';
import { orderContext as OrderContext } from '@/types';


const orderContext = createContext<orderContext | undefined>(undefined);

export const OrderProvider: React.FC<orderProps> = ({ children }) => {
  const { user } = useAuth();
  const [order, setOrder] = useState<IProduct[]>([]);

  useEffect(() => {
    if (user) {
      const orderStorage = localStorage.getItem(`orders_${user.id}`);
      if (orderStorage) {
        setOrder(JSON.parse(orderStorage));
      } else {
        setOrder([]);
      }
    } else {
      setOrder([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(order));
    }
  }, [order, user]);

  return (
    <orderContext.Provider value={{ order, setOrder }}>
      {children}
    </orderContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }
  return context;
};