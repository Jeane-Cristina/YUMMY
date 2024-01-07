import styles from './styles.module.css'

interface ItemProps{
    url:string;
    name:string;
    onClick: () => void;
}

export default function Item ({url,name, onClick}:ItemProps){
    const photoStyles = {
        backgroundImage: `url('${url}')`, 
    }
    return(
        <div className={styles.item} onClick={onClick}>
            <div className={styles.photo} style={photoStyles}></div>
            <span>{name}</span>
        </div>
    )
}