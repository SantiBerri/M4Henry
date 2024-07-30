"use client";

import React, { useEffect, useState } from 'react';
import { getProductsDB } from '@/helpers/products';
import  IProduct  from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const Productos: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProductsDB();
        console.log(productsData)
        setProducts(productsData);
      } catch (error) {
        setError('Error al obtener los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center gap-2">
        <div className="w-4 h-4 rounded-full bg-purple animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-purple animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-purple animate-bounce [animation-delay:-.5s]"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-gradient-to-r from-40% from-white to-lpurple shadow-md rounded-lg overflow-hidden border border-gray-200 w-full flex hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out transform mb-10"
          >
            <Link href={`/products/${product.id}`} passHref>
              <div className="flex">
                <div className="relative h-64 w-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    unoptimized
                  />
                </div>
                <div className="p-4 flex-1">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-lg font-medium text-black mt-2">
                    Precio: ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;