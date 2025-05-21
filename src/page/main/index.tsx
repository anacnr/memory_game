import { useState } from 'react'
import './css/main.module.css'
import kid from '../../assets/img/user-min.png'

import animals from '../../assets/img/animais-min.png'
import children from '../../assets/img/crianças-no-ceu-min.png'
import baby from '../../assets/img/jesus-bebe-min.png'
import jesus_christ from '../../assets/img/jesus-com-a-cruz-min.png'
import jesus_reigns from '../../assets/img/jesus-com-anjos-min.png'

import back from '../../assets/img/back-img-min.png'

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
                //Para achar outro pares
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
        <div>
            <header>
                <span>
                    <output>Nome</output>
                </span>
                <div><img src={kid} alt="Usuário-img"/>
                <hr />
                <p>{point}</p>
                </div>
            </header>
            <main>
                <h1>encontre o par da imagem!</h1>
                
                    <section>
                    <div className='div-animals'> <img className='animals' onClick={myClass} src={back} alt="" data-card = "0" /></div>
                    <div className='div-children'> <img className='children' onClick={myClass} src={back} alt="" data-card = "1" /></div>
                    <div className='div-baby'> <img className='baby' onClick={myClass} src={back} alt="" data-card = "2" /></div>
                    <div className='div-jesus_christ'> <img className='jesus_christ' onClick={myClass} src={back} alt="" data-card = "3" /></div>
                        
                    </section>
                    <section>
                        <div className='div-children'><img className='children' onClick={myClass} src={back} alt="" data-card = "4" /></div>
                        <div className='div-jesus_reigns'><img className='jesus_reigns' onClick={myClass} src={back} alt="" data-card = "5" /></div>
                        <div className='div-jesus_christ'><img className='jesus_christ' onClick={myClass} src={back} alt="" data-card = "6" /></div>
                        <div className='div-animals'><img onClick={myClass} className='animals' src={back} alt="" data-card = "7" /></div>
                    </section>
                    <section>
                        <div className='div-baby'><img className='baby' onClick={myClass} src={back} alt="" data-card = "8" /></div>
                        <div className='div-jesus_reigns'><img className='jesus_reigns' onClick={myClass} src={back} alt="" data-card = "9" /></div>
                        <div className='div-four'><img src={back} className='four' onClick={myClass} alt="" data-card = "10"/></div>
                        <div className='div-four'><img src={back} className='four' onClick={myClass} alt="" data-card = "11"/></div>
                    </section>                
                <aside>
                    <img src="#" alt="" />
                </aside>
                <aside>
                    <img src="#" alt="" />
                </aside>
            </main>
        </div>
    )
}

export {Memory_Game}