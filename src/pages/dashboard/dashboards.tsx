import Cart from '../../components/Cart/Cart';
import ItemsCarrousel from '../../components/ItemsCarrousel/itenscarrousel';
import Menu from '../../components/Menu/menu';
import TopNav from '../../components/TopNav/topnav';
import CartContextProvider from '../../contexts/cart/CartContext';
import FilterContextProvider from '../../contexts/filter/FilterContext';
import styles from './styles.module.css';

export default function Dashboard () {
    return(
        <div className={styles.content}>
            <CartContextProvider>
                <FilterContextProvider>
                    <div className={styles.topNav}>
                        <TopNav/>
                    </div>
                    <div className={styles.body} >
                        <div className={styles.main}>
                            <ItemsCarrousel/>
                            <Menu/>
                        </div>
                        <div className={styles.cart}>
                            <Cart/>
                        </div>
                    </div>
                </FilterContextProvider>
            </CartContextProvider>
        </div>
    )
}