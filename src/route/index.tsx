import{ createBrowserRouter } from 'react-router-dom'
import { Memory_Game } from '../page/main'
import { Layout } from '../layout'
import { Winner } from '../page/winner'
import { Login } from '../page/login'

const exportRoutes = createBrowserRouter([
    {
      element : <Layout/>,
      children : [
          {
            path : '/',
            element : <Memory_Game/>
          },
          {
            path : '/winner/:name',
            element : <Winner/>
          },
          {
            path : '/login',
            element : <Login/>
          }
      ]
    }
])

export {exportRoutes}