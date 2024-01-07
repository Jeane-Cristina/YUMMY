import { CSSProperties } from 'react';
import { useCartContext } from '../../../contexts/cart/CartContext';
import styles from './styles.module.css'
import { CiStar } from "react-icons/ci";

type FoodProps = {
    index: number;
    name: string;
    rate: string;
    flavours: string;
    image: string;
    price: number;
};

export default function Food({index, name, rate, flavours, image, price } : FoodProps){

    const adjustStylesImage: CSSProperties = {
        backgroundImage: `url(${image})`
    }

    const { handleAddItem } = useCartContext();

    function addFood(){

        handleAddItem(index, name, price, image, 1);
        //handleRemoveItem(index, 1);
    }

    return(
        <div className={styles.food} onClick={addFood}>
            <div className={styles.image} style={adjustStylesImage}></div>
            <div className={styles.details}>
                <div className={styles.name}>{name}</div>
                <div className={styles.class}>
                    <div className={styles.rating}><CiStar/>
                        <span>{rate}</span>
                    </div>
                    <span className={styles.flavours}>{flavours}</span>
                    <span className={styles.flavours}> R$ {price}</span>
                </div>
            </div>
        </div>
    )
}