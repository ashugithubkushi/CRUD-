import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './assets/Users'
import CreateUser from './assets/CreateUser'
import UpdateUser from './assets/UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Users/>} />
    <Route path="/create" element={<CreateUser/>} />
    <Route path="/update/:id" element={<UpdateUser/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
