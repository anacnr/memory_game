import { useContext } from 'react'
import { UserContext } from '../../context'
 
import styles from './css/header.module.css'
import kid from '../../assets/user/user-min.png'

interface TestProps{
    param : number
}

const Header = ({param} : TestProps) =>{

    const research = useContext(UserContext)
    const { player } = research
    
    return(
        <header className= {styles.header_user} >
             <span className={styles.span_user}>
                <p className={styles.p_user}>{player}</p>
                </span>
                <div className={styles.div_user}>
                    <img src={kid} alt="" className={styles.img_user} />
                    <hr />
                    <p className={styles.p_points_user}>{param}</p>
                </div>
             
        </header>
    )
}

export {Header}