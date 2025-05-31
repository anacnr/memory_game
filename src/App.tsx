import { RouterProvider } from 'react-router-dom'
import { exportRoutes } from './route/index'
import UserProvider from './context'

function App() {
return(
 <UserProvider>
      <div>
        <RouterProvider router={exportRoutes}/>
      </div>
 </UserProvider>
)
}
export default App