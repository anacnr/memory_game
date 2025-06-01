
import { useContext } from 'react'
import { UserContext } from '../../context'
import './css/winner.module.css'

const Winner = () =>{

    const research = useContext(UserContext)
    let name = research.player

    return(
        <div>
            <h1>Parabéns, você venceu!</h1>
            <img src={'pic'} alt="Usuário"/>
            <h2><strong>{name}</strong></h2>
        </div>
    )
}

export {Winner}