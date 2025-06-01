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
            path : '/main',
            element : <Memory_Game/>
          },
          {
            path : '/winner',
            element : <Winner/>
          },
          {
            path : '/',
            element : <Login/>
          }
      ]
    }
])

export {exportRoutes}