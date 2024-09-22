import './App.css'
import { HomePag } from './Pages/HomePag'
import { RouterProvider } from 'react-router-dom'
import { routerApp } from './Pages/Routes.jsx/Routes'
import {SignIn} from './Pages/LoginPag'


function App() {
  return (
   <RouterProvider router={routerApp()}></RouterProvider>
  ) 
}

export default App
