
"use client"
import React from 'react';
import IProduct from '@/types';
import Image from 'next/image';
import { useAuth } from '@/context/authContext';
import { useCart } from '@/context/cartContext';
import { useState } from 'react';


interface ProductDetailProps {
  product: IProduct;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const {setCart, cart} = useCart();
  const {isAuthenticated} = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const cartHandler = () => {
    if (!isAuthenticated) {
      setErrorMessage("Debes iniciar sesión para agregar productos al carrito");
      return;
    }

    const cartNew = [...cart, {...product}]
    setCart(cartNew)
    localStorage.setItem("cart", JSON.stringify(cartNew))
  }

  return (
    <div className="flex items-center min-h-screen h-screen text-white">
      <div className="w-full h-full flex flex-col md:flex-row flex-1">
        <div className="w-full md:w-1/2 p-8 mb-8 md:mb-0 bg-grey rounded-md border-r-8 border-b-8 border-lpurple flex flex-col">
          <p className="text-3xl font-bold mb-4">{product.name}</p>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-8">${product.price}</p>
          <button onClick={cartHandler} className="w-5/6 flex items-center px-3 py-1 bg-lpurple text-white font-extrabold text-base rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-pruple focus:ring-opacity-70 active:bg-pruple active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-8 h-8 mr-4 -ml-2 text-white animate-pulse"
            >
              <path
                d="M12 4v16m8-8H4"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            Agregar al carrito
          </button>
          {errorMessage && (
        <div className="text-red-500 mt-2">{errorMessage}</div>
      )}
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-sm text-purple-400">{product.name}</p>
            <div className="flex">
              <button className="bg-purple-500 text-white px-2 py-1 rounded-l">
                &#60;
              </button>
              <button className="bg-purple-500 text-white px-2 py-1 rounded-r">
                &#62;
              </button>
            </div>
          </div>
          <div className="flex-grow justify-center h-full">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
