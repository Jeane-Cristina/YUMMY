import React, { useContext } from 'react';
import Item from './Item/item'
import styles from './styles.module.css'
import axios from 'axios'
import { useFilterContext } from '../../contexts/filter/FilterContext';


export default function ItemsCarrousel (){


    const items = [{
        url:'https://cdn-icons-png.flaticon.com/512/6978/6978255.png',
        name: 'Pizza'
    },
    {
        url:'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' ,
        name:'Hamburger'
    },
    {
        url:'https://cdn-icons-png.flaticon.com/512/3198/3198644.png' ,
        name:'Sorvete'
    },
    {
        url:'https://cdn-icons-png.flaticon.com/512/5916/5916453.png' ,
        name:'Açaí'
    },
    {
        url:'https://cdn-icons-png.flaticon.com/512/4524/4524972.png' ,
        name:'Churrasco'
    },
    {
        url:'https://cdn-icons-png.flaticon.com/512/1868/1868619.png' ,
        name:'Outros'
    },
    {
        url:'https://cdn-icons-png.flaticon.com/512/2082/2082080.png' ,
        name:'Massas'
    },
    {
        url:'https://cdn-icons-png.flaticon.com/512/1261/1261134.png' ,
        name:'Bebidas'
    }

];

    const {handleChangeFilter} = useFilterContext()

    function handleFilterName (name:string){
        handleChangeFilter(name)
    }

    return(
        <div className={styles.carrousel} >
            {items.map((item) => ( 
                <React.Fragment>
                    <Item url={item.url} name={item.name} onClick={() => { handleFilterName(item.name) }}/>
                </React.Fragment>
            ))}
        </div>
    )
}