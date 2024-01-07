import { ReactNode } from "react";

export type ItemType = {
    index:number;
    name: string;
    price: number;
    totalPrice: number;
    itemPicture: string;
    quantity: number;
};

export type CartContextType = {
    items: ItemType[];
    handleAddItem: (index:number,name: string, price: number, itemPicture: string, quantity: number) => void;
    handleRemoveItem: (index:number, quantity:number) => void;
};

export const defaultValue: CartContextType = {
    items: [],
    handleAddItem: () => {},
    handleRemoveItem: () => {},
};

export type CartContextProviderProps = {
    children: ReactNode;
};
