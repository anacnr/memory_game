import { useState } from 'react'
import './css/main.module.css'
import kid from '../../assets/img/user-min.png'

import animals from '../../assets/img/animais-min.png'
import children from '../../assets/img/crianças-no-ceu-min.png'
import baby from '../../assets/img/jesus-bebe-min.png'
import jesus_christ from '../../assets/img/jesus-com-a-cruz-min.png'
import jesus_reigns from '../../assets/img/jesus-com-anjos-min.png'

//Pág principal
const Memory_Game = () =>{

    const [nameclass, setNameClass] = useState<string | null>("")
    const [count, setCount] = useState(0)

    const myClass = ( e : React.MouseEvent<HTMLImageElement> ) =>{
        setNameClass(e.currentTarget.className)
        console.log(nameclass);
    }

    return(
        <div>
            <header>
                <span>
                    <output>Nome</output>
                </span>
                <div><img src={kid} alt="Usuário-img"/>
                <hr />
                <p>0</p>
                </div>
            </header>
            <main>
                <h1>encontre o par da imagem!</h1>
                
                    <section>
                        <div className='animals' onClick={myClass}><img src={animals} alt="" /></div>
                        <div className='children'><img src={children} alt="" /></div>
                        <div className='baby'><img src={baby} alt="" /></div>
                        <div className='jesus_christ'><img src={jesus_christ} alt="" /></div>
                        
                    </section>
                    <section>
                        <div className='children'><img src={children} alt="" /></div>
                        <div className='jesus_reigns'><img src={jesus_reigns} alt="" /></div>
                        <div className='jesus_christ'><img src={jesus_christ} alt="" /></div>
                        <div className='animals'><img src={animals} alt="" /></div>
                    </section>
                    <section>
                        <div className=''><img src="#" alt="" /></div>
                        <div className=''><img src="#" alt="" /></div>
                        <div className=''><img src="#" alt="" /></div>
                        <div className=''><img src="#" alt="" /></div>
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