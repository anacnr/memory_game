import { useState } from 'react'
import kid  from "./img/user-min.png";
import back from "./img/back-img-min.png";
import styles from './css/main.module.css'
import { Header } from '../../component/header';

//Pág principal
const Memory_Game = () =>{
    const [name_class, setNameClass] = useState<string | null>("")
    const [number_card, setNumberCard] = useState<string>("")
    const [count, setCount] = useState(0)
    const [point, setPoint] = useState(0)

    const myClass = ( event : React.MouseEvent<HTMLImageElement> ) =>{
        const my_card = event.currentTarget
        let class_card = my_card.classList[0]
        let data_card = my_card.dataset.card   

        my_card.style.opacity = '0'
        
        if(count == 0){
            if(data_card != undefined){
            console.log(`PRIMEIRO CARD ESCOLHIDO CLASSE: ${class_card} CARD: ${data_card}`);
            setNameClass(class_card)
            setNumberCard(data_card) 
            setCount(1)
            }
        }
        else if(count == 1){
            //name_class é o primeiro card escolhido
            if(class_card == name_class && data_card != number_card){
                console.log("Achei o par!");
                console.log(`class_card: ${class_card} data_card: ${data_card}`);
                console.log(`name_class: ${name_class} number_card: ${number_card}`);
                my_card.style.opacity = '0'
                setPoint(point + 1)
                //Para achar outros pares
                setCount(0)
            }
            else{
                console.log("Não é meu par!") 
                console.log(`class_card: ${class_card} data_card: ${data_card}`);
                console.log(`name_class: ${name_class} number_card: ${number_card}`); 

                setTimeout(() => {
                    my_card.style.opacity = '1'
                }, 600);
            }
        }
        
    }

    return(
        <div className={styles.conainer_main}>
            <Header param = { point }/>
            <h1 className={styles.title}>encontre o par da imagem!</h1>
            <hr />
        </div>
    )
}

export {Memory_Game}