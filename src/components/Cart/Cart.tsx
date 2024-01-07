import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import OrderItem from './order-item/order-item';
import { useCartContext } from '../../contexts/cart/CartContext';

type AddressType = {
    zipcode: number;
    street: string;
    district: string;
    number?: number;
}

export default function Cart(){
    
    const [zipcode,setZipCode] = useState('');
    const [address,setAddress] = useState<AddressType>();
    const ordersRef = useRef <HTMLDivElement>(null);
    const { items } = useCartContext();
    const [amount, setAmount] = useState<number>(0);


    async function handleZipCode(event: ChangeEvent<HTMLInputElement>): Promise<void>{

        const value = event.target.value;
        setZipCode(value);

        if(value.length === 8){
            const {data} = await axios.get('https://brasilaberto.com/api/v1/zipcode/'+ value);
            setAddress({zipcode: parseInt(value), street: data.result.street, district: data.result.district});
        }
    }

    function handleScrollOrders(event: any){
        if(ordersRef && ordersRef.current){
            const deltaY = event.deltaY;
            ordersRef.current.scrollTop += deltaY;
        }
    }

    useEffect(()=>{
        ordersRef?.current?.addEventListener('wheel', handleScrollOrders);
        return(()=>{
            ordersRef?.current?.removeEventListener('wheel', handleScrollOrders);
        });
    });

    useEffect(() => {
        function recalculateAmount(){
            var tmpAmount: number = 0;
            items.map((item) => {
                tmpAmount += item.totalPrice;
            });
            setAmount(tmpAmount);
        }
        recalculateAmount();
    }, [items]);

    return(
        <div className={styles.cart}>
            <h1>MEUS PEDIDOS</h1>
            <div className={styles.order__items} ref={ordersRef}>
                {items.length > 0 && (
                    <React.Fragment>
                        {items.map((item, index) => (
                            <OrderItem index={index} 
                                image={item.itemPicture} 
                                quantity={item.quantity} 
                                name={item.name} 
                                price={item.totalPrice}                        
                            />
                        ))}
                    </React.Fragment>
                )}



            </div>
            <br />
            <div className={styles.address}>
                <div className={styles.fields}>
                    <span>CEP</span>
                    <input maxLength={8} value={zipcode} placeholder='Digite o CEP...' onChange={(e)=>{handleZipCode(e);}} />
                </div>
                {(address?.street && address.district) && (
                    <React.Fragment>
                        <div className={styles.fields}><span>RUA</span><span>{address.street}</span></div>
                        <div className={styles.fields}><span>BAIRRO</span><span>{address.district}</span></div>
                        <div className={styles.fields}><span>NÚMERO</span><input maxLength={4} placeholder='Digite o número...'/></div>
                    </React.Fragment>
                )}
                

            </div>
            <div className={styles.checkout}>
                <span>Valor total: R$ {amount}</span>
                <button className={styles.create__order}>PEDIR</button>
            </div>
            
        </div>
    )
}