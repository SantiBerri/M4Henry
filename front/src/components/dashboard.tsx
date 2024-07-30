'use client';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext'; 
import Image from 'next/image';
interface IOrder {
  id: number;
  createdAt: Date;
  total: number;
  products: {
    id: number;
    name: string;
    price: number;
    image: string;
    stock: number;
  }[];
}

const Dashboard = () => {
  const { token, user } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(storedOrders);
  }, []);

  if (!user) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <div className="p-6 bg-gradient-to-r from-white to-lpurple shadow-md rounded-lg w-full max-w-4xl mb-10">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Tus datos</h1>
        <p className="text-lg mb-2 text-gray-700">
          <span className="font-bold">Nombre:</span> {user.name}
        </p>
        <p className="text-lg mb-2 text-gray-700">
          <span className="font-bold">Email:</span> {user.email}
        </p>
        <p className="text-lg mb-2 text-gray-700">
          <span className="font-bold">Dirección:</span> {user.address}
        </p>
        <p className="text-lg mb-2 text-gray-700">
          <span className="font-bold">Teléfono:</span> {user.phone}
        </p>
      </div>
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Tus pedidos</h1>
        {orders.length === 0 ? (
          <p className="text-lg text-gray-700">No hay órdenes registradas</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="mb-6 p-4 bg-white shadow-md rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Orden ID: {order.id}</h2>
              <p className="text-gray-600">Fecha: {new Date(order.createdAt).toLocaleString()}</p>
              <p className="text-gray-600">Total: ${order.total}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
