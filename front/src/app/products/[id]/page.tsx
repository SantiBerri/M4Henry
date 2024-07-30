// app/products/[id]/page.tsx
import React from 'react';
import ProductDetail from '@/components/ProductsDetails';
import IProduct from '@/types';
import { getProductById } from '@/helpers/products';

interface ProductPageProps {
  product: IProduct;
}



const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;


    const product: IProduct = await getProductById(id);
    console.log(product)


  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
