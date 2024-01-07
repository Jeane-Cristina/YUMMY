import { useFilterContext } from '../../contexts/filter/FilterContext';
import Food from './Food/food';
import styles from './styles.module.css';
import React, { ReactNode, useEffect, useMemo, useRef } from 'react';

export default function Menu (){

    const menuRef = useRef<HTMLDivElement>(null);
    const { filter } = useFilterContext();
    
    function handleScrollCarrousel(event: any){
        const delta = event.deltaY;
        if(menuRef && menuRef.current) {
            menuRef.current.scrollTop += delta;
        }
    }

    useEffect(()=>{
        menuRef?.current?.addEventListener('wheel', handleScrollCarrousel);
        return (() =>{
            menuRef?.current?.removeEventListener('wheel', handleScrollCarrousel);
        })
    });

    const listFoods = [
        {
            type: 'Hamburger',
            index: 0,
            name: 'X-Bacon',
            rate: '4.5',
            flavours: 'Bacon',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg/1200px-McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg',
            price: 50,
        },
        {
            type: 'Hamburger',
            index: 1,
            name: 'X-Salada',
            rate: '4.0',
            flavours: 'Salada',
            image: 'https://www.plasutil.com.br/wp-content/uploads/2022/04/Hamburguer.jpg',
            price: 30,
        },
        {
            type: 'Hamburger',
            index: 2,
            name: 'X-Tudo',
            rate: '4.95',
            flavours: 'Tudo',
            image: 'https://veja.abril.com.br/wp-content/uploads/2023/05/Meat_Bronx_Foto-Marinho-Rodrigues_195.jpg?quality=90&strip=info&w=1280&h=720&crop=1',
            price: 70,
        },
        {
            type: 'Pizza',
            index: 3,
            name: 'Pizza Catuperone',
            rate: '4.5',
            flavours: 'Catupiry, Pepperone',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyzvtHSA_ElPh7iW0vHcK8Mv9CrcSrGumpA&usqp=CAU',
            price: 80,
        },
        {
            type: 'Pizza',
            index: 4,
            name: 'Pizza Portuguesa',
            rate: '4.5',
            flavours: 'Ovo, Queijo',
            image: 'https://www.minhareceita.com.br/app/uploads/2022/12/pizza-de-pepperoni-caseira-portal-minha-receita.jpg',
            price: 60,
        },
        
        {
            type: 'Sorvete',
            index: 6,
            name: 'Sorvete de limão',
            rate: '5.0',
            flavours: 'Limão, leite',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1bJZL35T1TNoTpyEgaiNouwVtjfAmTpCgQ&usqp=CAU',
            price: 20,
        },
        {
            type: 'Sorvete',
            index: 7,
            name: 'Sorvete de chocolate',
            rate: '3.0',
            flavours: 'Chocolate, leite',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RmjFN_JnGq3zbgBU62Qe4OouUjV2ALk3DuZunumhijNWZ11HCrBy2CznFz29zGX6bxc&usqp=CAU',
            price: 20,
        },
        {
            type: 'Churrasco',
            index: 8,
            name: 'Espetinho',
            rate: '3.0',
            flavours: 'Carne, Frango',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk52HhJuQMjL5BgFybpSFG3lU7XcpqYnQUNhOUB2zUckADm-prNmJTl3clTsKtjR-IVGY&usqp=CAU',
            price: 15,
        },
        {
            type: 'Outros',
            index: 9,
            name: 'Batata frita',
            rate: '3.5',
            flavours: 'Batata',
            image: 'https://softpig.com.br/wp-content/uploads/2023/10/Batata-frita-com-cheddar-e-bacon-Receita-softpig-1200x600.jpg',
            price: 13,
        },
        {
            type: 'Açaí',
            index: 10,
            name: 'Açaí',
            rate: '4.5',
            flavours: 'Açaí',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rTkHzTC8NJ-x0-_m3uWOTclr3CTfdL6aioJpeOZrMrDk7OAE5bd7PjDJrn9As12mz7o&usqp=CAU',
            price: 13,
        },
        {
            type: 'Outros',
            index: 11,
            name: 'Salada de frutas',
            rate: '4.0',
            flavours: 'Frutas',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY9QPiUcZMcFcjkAyiGGWmEt0xXNMChZpggZUA3ZwWCcP3Y_cxcIFsuMxCT8jw6E9brM&usqp=CAU',
            price: 10,
        },
        {
            type: 'Massas',
            index: 12,
            name: 'Lasanha',
            rate: '4.1',
            flavours: 'Carne',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Y6UnaJ2ARM_EWohJR1MLikL8x73S3sff9af41Gzf3BkRA1l4o_OO2BPupK3b6LsXIOs&usqp=CAU',
            price: 25,
        },
        {
            type: 'Pizza',
            index: 13,
            name: 'Pizza de Frango',
            rate: '4.5',
            flavours: 'Frango, Catupiry',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rlWf3gwHL3687jh4fqGyBmVoGHBF2DBpRA&usqp=CAU',
            price: 60,
        },
        {
            type: 'Pizza',
            index: 14,
            name: 'Pizza de Queijo',
            rate: '5.0',
            flavours: 'Queijo',
            image: 'https://pubimg.band.uol.com.br/files/e7c7412c3cd54a639e21.png',
            price: 60,
        },
        {
            type: 'Hamburger',
            index: 15,
            name: 'X-Frango',
            rate: '5.95',
            flavours: 'Frango',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rjHI1VUJOOHco2AS9mxOnnp5w3H0kW_6gkzTCkSf17myN42JE8DGxcIPDVgN7KZbRcs&usqp=CAU',
            price: 70,
        },
        {
            type: 'Sorvete',
            index: 16,
            name: 'Picolé de maracujá',
            rate: '3.0',
            flavours: 'Maracujá, leite',
            image: 'https://www.copra.com.br/wp-content/uploads/2020/02/Picol%C3%A9-de-maracuja-e-banana.jpg',
            price: 20,
        },
        {
            type: 'Açaí',
            index: 17,
            name: 'Açaí com banana',
            rate: '4.0',
            flavours: 'Açaí, banana',
            image: 'https://flordejambu.com/wp-content/uploads/2022/05/acai.png',
            price: 13,
        },
        {
            type: 'Açaí',
            index: 18,
            name: 'Açaí com guaraná',
            rate: '4.0',
            flavours: 'Açaí, guaraná',
            image: 'https://duisktnou8b89.cloudfront.net/img/items/653aa86734519.jpeg',
            price: 13,
        },
        {
            type: 'Churrasco',
            index: 19,
            name: 'Picanha',
            rate: '3.5',
            flavours: 'Carne',
            image: 'https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg',
            price: 90,
        },
        {
            type: 'Churrasco',
            index: 20,
            name: 'Filé Mignon',
            rate: '4.5',
            flavours: 'Carne',
            image: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia7011/churrasco-cursos-cpt.jpg',
            price: 80,
        },
        {
            type: 'Outros',
            index: 21,
            name: 'Cebola frita',
            rate: '4.0',
            flavours: 'Cebola',
            image: 'https://s2.glbimg.com/N7l3aY3pSLomMIqd2qU-dehlBcw=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/12/16/bloomin_onion_5.jpg',
            price: 15,
        },
        {
            type: 'Massas',
            index: 22,
            name: 'Macarrão a bolonhesa',
            rate: '4.5',
            flavours: 'Carne, Macarrão',
            image: 'https://receidelicia.com.br/wp-content/uploads/2020/12/espaguete-a-bolonhesa1.jpg',
            price: 30,
        },
        {
            type: 'Massas',
            index: 23,
            name: 'Macarrão a carbonara',
            rate: '4.5',
            flavours: 'Carne, Macarrão',
            image: 'https://www.clubedereceitas.com.br/wp-content/uploads/2023/06/receita-macarrao-a-carbonara.jpg',
            price: 35,
        },
        {
            type: 'Bebidas',
            index: 24,
            name: 'Coca-cola',
            rate: '5.0',
            flavours: 'Cola',
            image: 'https://classic.exame.com/wp-content/uploads/2018/08/coca-cola-reutersregis-duvignau-e1534852966658.jpg?quality=70&strip=info&w=1024',
            price: 5,
        },
        {
            type: 'Bebidas',
            index: 25,
            name: 'Suco de laranja',
            rate: '5.0',
            flavours: 'Laranja',
            image: 'https://static1.minhavida.com.br/articles/b5/29/62/fb/suco-de-laranja-orig-1.jpg',
            price: 8,
        },
        {
            type: 'Bebidas',
            index: 26,
            name: 'Cerveja',
            rate: '2.0',
            flavours: 'Cevada',
            image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/10/corpo-texto-jovens-bebendo-cerveja.jpg',
            price: 12,
        },
    ];

    const foodsFiltered = useMemo(() => {
        if(filter && filter.length > 2){

            const listFiltered: any = [];
            listFoods.map((food) => {
                if(food.type.toLowerCase().includes(filter.toLowerCase())){
                    listFiltered.push(food);
                }
            });
            return listFiltered;
        }
        return listFoods;
    }, [filter]);

    return(
        <div className={styles.menu} ref={menuRef} >
            {foodsFiltered.map((food: any) => (
                <Food key={food.index} 
                    index={food.index} 
                    name={food.name} 
                    rate={food.rate} 
                    flavours={food.flavours} 
                    image={food.image} 
                    price={food.price} 
                />
           ))}
        </div>
    )
}