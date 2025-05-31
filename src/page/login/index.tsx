import { FormEvent,  useContext} from "react";
import { UserContext } from '../../context'

import { useNavigate } from 'react-router-dom'
import styles from '../login/css/login.module.css'

import image from './img/capamemory_game.png'


const Login = () =>{

    const research = useContext(UserContext)
    const { player, toSavePlayer } = research

    const redirection = useNavigate()

    const onSubmitForm = (event : FormEvent) =>{
        event.preventDefault()
        console.log("Nickname: " , player);

        if(player.length == 0){
            alert("Preencha o campo menino(a)!")
            return
        }
        else{
            toSavePlayer(player)
            redirection("/")
        }
    }

    return(
            <div className={styles.div_login}>
            <h1 className={styles.h1_login}>Joguinho de Memória</h1>
            <img src= {image} className={styles.img_login} alt="Capa do jogo" />
            <h2 className={styles.h2_login}>Coloque o seu apelido</h2>
            <form onSubmit={onSubmitForm} className={styles.form_login}>
                <input type="text" className={styles.input_name} minLength={2} maxLength={6} placeholder="pandinha" value={player} onChange={(e) => toSavePlayer(e.target.value)} required/>
                <input type="submit" className={styles.input_sent}value={"Começar"} />
            </form>
        </div>
    )
}

export {Login}