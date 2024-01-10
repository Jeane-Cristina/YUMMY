import { CSSProperties } from 'react';
import styles from './order-item.module.css';
import { BsTrashFill } from "react-icons/bs";
import { useCartContext } from '../../../contexts/cart/CartContext';

type OrderItemProps = {
    index: number;
    image: string;
    quantity: number;
    name: string;
    price: number;
}

export default function OrderItem({ index, image, quantity, name, price } : OrderItemProps){

    const adjustStylesImage: CSSProperties ={
        backgroundImage: `url(${image})`
    
    }

    const { handleRemoveItem } = useCartContext();

    function handleRemoveOption(){
        handleRemoveItem(index, 1);
    }

    return (
        <div key={index} className={styles.item}>
            <div className={styles.plate}>
                <div className={styles.img} style={adjustStylesImage}></div>
                <span>{quantity} <label>X</label> {name}</span>
            </div>
            <div className={styles.price}>R$ {price}</div>
            <div className={styles.dump}><BsTrashFill onClick={handleRemoveOption} /></div>
        </div>
    )
}