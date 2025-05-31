import styles from './css/footer.module.css'

const Footer = () =>{
    return(
        <footer className={styles.footer_author}>
            <h4 className={styles.h4_author}>Projeto de anacnr &copy; Todos os direitos reservados</h4>
        </footer>
    )
}

export {Footer}