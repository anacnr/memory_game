import { useState } from 'react'
import back from "./img/back-img-min.png";
import card_animals from "./img/animais-min.png"
import card_children from "./img/crianças-no-ceu-min.png"
import card_baby_jesus from "./img/jesus-bebe-min.png"
import card_jesus_cross from "./img/jesus-com-a-cruz-min.png"
import card_angels from "./img/jesus-com-anjos-min.png"

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
        const  first_card_picked = my_card.classList[0]
        //Precisa para que o usuário não clique na mesma imagem que virou pela primeira vez e dê como par encontrado
        const data_card = my_card.dataset.card
        
        my_card.style.opacity = '0'  
        
        if(count == 0){
            if(data_card != undefined){
                setNameClass(first_card_picked)
                setNumberCard(data_card)
                setCount(1)
            }
        }
        else if (count == 1){
            if(first_card_picked == name_class && data_card != number_card){
                console.log(`first_card_picked : ${first_card_picked} | name_class : ${name_class} | data_card : ${data_card} | number_card : ${number_card}`);
                
                console.log("par encontrado!");
                setPoint(point + 1)
            }
            else{
                console.log("par não encontrado!");
                console.log(`first_card_picked : ${first_card_picked} | name_class : ${name_class} | data_card : ${data_card} | number_card : ${number_card}`);
                setTimeout(()=>{
                    my_card.style.opacity = '1'
                }, 600)
            }
        }
    }

    return(
        <div className={styles.conainer_main}>
            <Header param = { point }/>
            <h1 className={styles.title}>encontre o par da imagem!</h1>
            <hr />
            <section className={styles.section_main}>
                <div className={styles.div_animals} > <img src ={back} onClick={myClass} className='img_animals' data-card = '0' alt="animals" /></div>
                <div className={styles.div_children} ><img src ={back} onClick={myClass} className='img_children' data-card = '1' alt="children" /></div>
                <div className={styles.div_baby_jesus} data-set = '2' ><img src={back} alt="baby_jesus" /></div>
            </section>
            <section className={styles.section_main}>
                <div className={styles.div_jesus_cross} ><img src ={back} onClick={myClass} data-set = '3'alt="jesus_cross" /> </div>
                <div className={styles.div_angels} ><img src ={back} onClick={myClass} data-set = '4' alt="angels" /></div>
                <div className={styles.div_children}><img src={back} onClick={myClass} data-set = '5' alt="baby_jesus" /></div>
            </section>
            <section className={styles.section_main}>
                <div className={styles.div_baby_jesus}><img src ={back} onClick={myClass} data-set = '6' alt="jesus_cross" /></div>
                <div className={styles.div_jesus_cross}><img src ={back} onClick={myClass} data-set = '7' alt="angels" /></div>
                <div className={styles.div_animals}><img src={back} onClick={myClass} data-set = '8' alt="baby_jesus" /></div>
            </section>
            <section className={styles.section_main}>
                <div className={styles.div_angels}><img src ={back} onClick={myClass} data-set = '9' alt="jesus_cross" /></div>
                <div className={styles.div_jesus_cross}><img src ={back} onClick={myClass} data-set = '10' alt="angels" /></div>
                <div className={styles.div_animals}><img src={back} onClick={myClass} data-set = '11' alt="baby_jesus" /></div>
            </section>
        </div>
    )
}

export {Memory_Game}