import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import back from "./img/back-img-min.png";
import styles from './css/main.module.css'

import { Header } from '../../component/header';

//Pág principal
const Memory_Game = () =>{
    const [name_class, setNameClass] = useState<string | null>("")
    const [number_card, setNumberCard] = useState<string>("")
    const [count, setCount] = useState(0)
    const [point, setPoint] = useState(0)

    const redirection = useNavigate()

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
                console.log("par encontrado!");
                setPoint(point + 1)
                console.log("PONTOS: " , point);
                setCount(0)
                if(point == 4){
                setTimeout(()=>{
                    redirection('/winner')
                },500)
                }
            }
            else if(first_card_picked == name_class && data_card == number_card){
                console.log("mesmo card!");
                setTimeout(()=>{
                    my_card.style.opacity = '1'
                    setNameClass("")
                    console.log(first_card_picked);
                    setCount(0)
                }, 600)               
            }
            else{
                console.log("par não encontrado!");
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
                <div className={styles.div_animals} > <img src ={back} onClick={myClass} data-card = '0' className='img_animals'  alt="animals" /></div>
                <div className={styles.div_children} > <img src ={back} onClick={myClass} data-card = '1' className='img_children' alt="children" /></div>
                <div className={styles.div_baby_jesus}> <img src={back} onClick={myClass} data-card = '2' className='img_baby_jesus' alt="baby_jesus" /></div>
            </section>
            <section className={styles.section_main}>
                <div className={styles.div_jesus_cross} ><img src ={back} onClick={myClass} data-card = '3' className='img_jesus_cross' alt="jesus_cross" /> </div>
                <div className={styles.div_angels} ><img src ={back} onClick={myClass} data-card = '4' className='img_angels'  alt="angels" /></div>
                <div className={styles.div_children}><img src={back} onClick={myClass} data-card = '5' className='img_children'  alt="baby_jesus" /></div>
            </section>
            <section className={styles.section_main}>
                <div className={styles.div_baby_jesus}><img src ={back} onClick={myClass} data-card = '6' className='img_baby_jesus'  alt="jesus_cross" /></div>
                <div className={styles.div_jesus_cross}><img src ={back} onClick={myClass} data-card = '7' className='img_jesus_cross'  alt="angels" /></div>
                <div className={styles.div_animals}><img src={back} onClick={myClass} data-card = '8' className='img_animals'  alt="baby_jesus" /></div>
            </section>
            <section className={styles.section_main}>
                <div className={styles.div_angels}><img src ={back} onClick={myClass} data-card = '9' className='img_angels' alt="angels" /></div>
                <div className={styles.div_game_case}><img src ={back} onClick={myClass} data-card = '10' className='img_game_case' alt="game_case" /></div>
                <div className={styles.div_game_case}><img src ={back} onClick={myClass} data-card = '11' className='img_game_case' alt="game_case" /></div>
            </section>
        </div>
    )
}

export {Memory_Game}