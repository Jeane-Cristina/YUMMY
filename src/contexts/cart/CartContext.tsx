import { createContext, useContext, useState } from "react";

import { CartContextProviderProps, CartContextType, ItemType, defaultValue } from "./CardContext.types";

const CartContext = createContext<CartContextType | undefined>(defaultValue);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {

    const [items, setItems] = useState<ItemType[]>([]);

    function handleAddItem(index:number, name: string, price: number, itemPicture: string, quantity: number){

        const alreadyExists = items.find((item) => { return item.index === index; });
        if( alreadyExists ){
            const updatedListItems = items.map((item) => {
                if(item.index === index){
                    item.quantity++;
                    //item.price = item.quantity*item.price;
                    item.totalPrice = item.quantity*item.price;
                }
                return item;
            });

            setItems(updatedListItems);
        } else {

            const item: ItemType = {
                index:index,
                name: name,
                price: price,
                totalPrice: price,
                itemPicture: itemPicture,
                quantity: quantity,
            };
    
            setItems((prevItems) => {
                return [...prevItems, item];
            });
        }

    }

    function handleRemoveItem(index:number, quantity: number){
        
    }

    return (
        <CartContext.Provider value={{ items, handleAddItem, handleRemoveItem }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if( context === undefined ){
        throw new Error('useCartContext is undefined');
    }
    return context;
}

export default CartContextProvider;