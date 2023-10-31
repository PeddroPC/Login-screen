import React, {useState} from 'react'
import './Form.css'

const Form = ({addDados}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const handleAlert = () => {
        if (handleSubmit == false) {
            setShowAlert(true)

            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password){
            addDados(email, password)
            console.log(email, password)
            setEmail("")
            setPassword("")
        }else{
            console.error("Inválidado")
        }
    }
  return (
    <div className='card'>
        <form onSubmit={handleSubmit}>
            <div>
                <h1>
                    Login
                </h1>
            </div>
            <div>
                <div>
                    <input type='email' value={email} placeholder='Email:' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <input type='password' value={password} placeholder='Senha:' onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div>
                <button type='submit' onClick={handleAlert}><b>Cadastrar</b></button>
                {showAlert &&
                    <div>
                        <p>Logado com sucesso!!</p>
                    </div>    
                }
            </div>
        </form>
    </div>
  )
}

export default Form