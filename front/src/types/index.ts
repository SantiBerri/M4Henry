import { ReactNode } from "react";

interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    stock: number;
    categoryId: number;
}


export default IProduct;

export interface IOrder {
    id: number;
    createdAt: Date;
    products: IProduct[]
}
export interface LoginProps {
    email: string;
    password: string;
}

export interface LoginErrorProps {
    email?: string;
    password?: string;
}

export interface registerProps {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface registerErrorProps {
    email?: string;
    password?: string;
    name?: string;
    address?: string;
    phone?: string;
}


export interface cartProps {
    children: ReactNode
}

export interface cartContext {
    cart: IProduct[]
    setCart: (cart: IProduct[]) => void
}

export interface orderProps {
    children: ReactNode
}

export interface orderContext {
    order: IProduct[]
    setOrder: (order: IProduct[]) => void
}