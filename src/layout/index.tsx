import { Outlet } from 'react-router-dom'
import { Footer } from '../component/footer'

export function Layout(){
    return(
        <div>
            <Outlet/>
            <Footer/>
        </div>
    )
}