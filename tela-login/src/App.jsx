import { useState } from 'react'
import './App.css'
import Form from './Component/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewForm from './Component/NewForm';


function App() {
  
  const [dados, setDados] = useState([])


  const addDados = (nome, email, password) => {
    const newDados = [...dados, 
      {
        id: Math.floor(Math.random() * 100000),
        nome,
        email,
        password
      }
    ]
    setDados(newDados)
  }

  return (
    <Router basename='/'>
        <Routes>
          <Route path='/' element={<Form addDados={addDados}/>}></Route>
          <Route path='/newForm' element={<NewForm addDados={addDados}/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
