import { useContext } from 'react'
import { UserContext } from '../../context'
import styles from  './css/winner.module.css'

import kid from '../main/img/user-min.png'

const Winner = () =>{

    const research = useContext(UserContext)
    let name = research.player

    return(
       
        <div className={styles.div_winner}>
            <h1 className={styles.h1_winner}>Parabéns, você venceu!</h1>
            <img src={kid} className={styles.img_winner} alt="Usuário"/>
          <h2 className={styles.h2_winner}><strong>{name ? name : "usuário" }</strong></h2>         
        </div>

        

    )
}

export {Winner}