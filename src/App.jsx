import { useState } from 'react'
import './App.css'
import Form from './Component/Form'


function App() {
  const [dados, setDados] = useState([])


  const addDados = (email, password) => {
    const newDados = [...dados, 
      {
        id: Math.floor(Math.random() * 100000),
        email,
        password
      }
    ]
    setDados(newDados)
  }

  return (
    <div>
      <Form addDados={addDados}/>
    </div>
  )
}

export default App
