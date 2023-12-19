import React, {useState} from 'react'
import './Form.css'
import { Link } from 'react-router-dom'

const Form = ({addDados}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (email && password) {
          try {
            const response = await fetch('http://localhost:8080/dados/login', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            });
    
            if (response.ok) {
              const data = await response.json();
              console.log(data);
              addDados(email, password);
              setEmail('');
              setPassword('');
              alert('Logado');
            } else {
              alert('Credenciais inválidas');
            }
          } catch (error) {
            console.error('Erro ao realizar login:', error);
          }
        } else {
          alert('Credenciais inválidas');
        }
      };

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