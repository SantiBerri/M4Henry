"use client";

import React, { useEffect, useState } from 'react';
import { getProductsDB } from '@/helpers/products';
import IProduct from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const HomeProducts: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProductsDB();
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
    return <div className="flex justify-center gap-2">
    <div className="w-4 h-4 rounded-full bg-purple animate-bounce"></div>
    <div className="w-4 h-4 rounded-full bg-purple animate-bounce [animation-delay:-.3s]"></div>
    <div className="w-4 h-4 rounded-full bg-purple animate-bounce [animation-delay:-.5s]"></div>
  </div>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  const displayedProducts = products.slice(0, 2);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Productos Destacados</h1>
      <Link href = "/products">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayedProducts.map((product) => (
          <div key={product.id} className="transition duration-300 ease-in-out transform bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg font-medium text-black mt-2">Precio: ${product.price}</p>
            </div>
            <div className="h-64 flex justify-center mb-2">
              <Image
                src={product.image}
                alt={product.name}
                width={220}
                height={200}
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
      </Link>
    </div>
  );
};

export default HomeProducts;
