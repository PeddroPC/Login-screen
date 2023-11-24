import React, {useState} from 'react'
import './Form.css'
import { Link } from 'react-router-dom'

const Form = ({addDados}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password){
            addDados(email, password)
            console.log(email, password)
            setEmail("")
            setPassword("")
            alert("Logado")
        }else{
            alert("Inválidado")
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
                    <input className='inputbox' type='email' value={email} placeholder='Email:' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <input className='inputbox' type='password' value={password} placeholder='Senha:' onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div>
                <button type='submit'><b>Logar</b></button>
            </div>
        </form>
        <div className='cadastrar'>
            <Link className='link' to='/newForm'>
                Fazer Cadastro
            </Link>
        </div>
        <div className='lemSenha'>
            <input type='checkbox' name='forgetPassword'/>
            <p className='checkbox'>Lembrar senha</p>
        </div>
    </div>
  )
}

export default Form