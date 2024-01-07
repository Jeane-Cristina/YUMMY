import styles from './styles.module.css'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useCartContext } from '../../contexts/cart/CartContext';
import { ChangeEvent } from 'react';
import { useFilterContext } from '../../contexts/filter/FilterContext';

export default function TopNav(){

    const { items } = useCartContext();
    const { handleChangeFilter } = useFilterContext();

    const cartAmount: number = items.length; 

    function handleFilter(value: string): void{
        handleChangeFilter(value);
    }

    return(
        <div className={styles.topNav} >
                <h1>YUMMY</h1>
                <div className={styles.field__search}>
                    <input type='text' placeholder='Search' onChange={(e) => { handleFilter(e.currentTarget.value)}} />
                    <label className={styles.field__search__icon}><BiSearchAlt2 /></label>
                </div>
                <div className={styles.details}>
                    <div className={styles.cart}>
                        <BsFillCartCheckFill />
                        <div className={styles.amount}>{cartAmount}</div>
                    </div>
                    <div className={styles.picture}>
                        <div className={styles.photograph}></div>
                    </div>
                    <h2>Jeane Cristina</h2>
                </div>
            </div>
    )
}