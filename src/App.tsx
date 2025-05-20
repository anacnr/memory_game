import { RouterProvider } from 'react-router-dom'
import { exportRoutes } from './route/index'

function App() {
return(
      <div>
        <RouterProvider router={exportRoutes}/>
      </div>
)
}
export default App