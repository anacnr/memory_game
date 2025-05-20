import{ createBrowserRouter } from 'react-router-dom'
import { Memory_Game } from '../page/main'
import { Layout } from '../layout'

const exportRoutes = createBrowserRouter([
    {
      element : <Layout/>,
      children : [
          {
            path : '/',
            element : <Memory_Game/>
          }
      ]
    }
])

export {exportRoutes}