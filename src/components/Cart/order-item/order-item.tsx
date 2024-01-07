import { CSSProperties } from 'react';
import styles from './order-item.module.css';

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

    return (
        <div key={index} className={styles.item}>
            <div className={styles.plate}>
                <div className={styles.img} style={adjustStylesImage}></div>
                <span>{quantity} <label>X</label> {name}</span>
            </div>
            <div className={styles.price}>R$ {price}</div>
        </div>
    )
}