"use client";
import React from 'react';
import { useCart } from '@/context/cartContext';
import Image from 'next/image';

const Cart: React.FC = () => {
  const { cart, setCart } = useCart();


  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const cleanCart = () => {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const total = calculateTotal();  
    const newOrder = {
      id: Date.now(),
      cart,
      total,  
      createdAt: new Date(),
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      {!cart.length && 
      <h2 className='flex justify-center'>No hay productos en el carrito</h2>}
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="flex items-center mb-4 shadow-xl bg-gradient-to-r from-80% from-white to-lpurple rounded-md">
            <div className="mr-4">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                unoptimized
              />
            </div>
            <div>
              <p className="text-3xl font-bold">{product.name}</p>
              <p className="text-gray-600">Precio: {product.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex justify-center'>
        {cart.length &&  <button onClick={cleanCart} className="my-8 mx-8 w-1/4 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-lpurple shadow-lg shadow-indigo-500/50 text-white">Ordenar</button> }
      </div>  
    </div>
  );
};

export default Cart;