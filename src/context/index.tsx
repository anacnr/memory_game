import { createContext, ReactNode, useState } from "react";

interface UserProviderProps{
    children : ReactNode
}

type DatesProps = {
    player : string,
    //Utiliza esta função somente pra atualizar o nome do jogador.
    toSavePlayer : (name : string) => void
}

export const UserContext = createContext({} as DatesProps)

function UserProvider({children} : UserProviderProps){
    const [player, setPlayer] = useState("")

    //Captura o apelido do formulário
    function toSavePlayer (name : string){
        setPlayer(name)
    }

    return(
        <UserContext.Provider value={{player, toSavePlayer}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider