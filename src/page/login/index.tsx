import { useState, FormEvent } from "react";

import '../login/css/login.module.css'

const Login = () =>{

    const [nickname, setNickname] = useState("")

    const onSubmitForm = (event : FormEvent) =>{
        event.preventDefault()
        console.log("Nickname: " , nickname);
    }

    return(
        <div>
            <h1>Joguinho de Memória</h1>
            <h2>Coloque o seu apelido</h2>
            <form>
                <input type="text" minLength={2} maxLength={6} placeholder="pandinha" value={nickname} onChange={(e) => setNickname(e.currentTarget.value)} required/>
                <input type="button" value={"Começar"} />
            </form>
            <img src= {'game_case'} alt="Capa do jogo" />
        </div>
    )
}

export {Login}