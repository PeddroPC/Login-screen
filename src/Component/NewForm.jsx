import { useState, useEffect } from "react";

const NewForm = ({addDados}) => {

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (nome && email && password) {
          try {
            const response = await fetch('http://localhost:8080/dados/cadastrar', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name:nome, email, password }),
            });
    
            if (response.ok) {
              setNome('')
              setEmail('');
              setPassword('');
              setPasswordConfirm('')
              alert('Cadastrado');
              const data = await response.json();
              console.log(data);
              addDados(nome, email, password);
            } else {
              alert('Senha inválida');
            }
          } catch (error) {
            console.error('Erro ao realizar cadastro:', error);
          }
        } else {
          alert('Credenciais inválidas');
        }
      };
    return(
        <div className='card'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>
                        Cadastrar
                    </h1>
                </div>
                <div>
                    <div>
                        <input className='inputbox' type='text' placeholder='Nome:' value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <input className='inputbox' type='email' placeholder='Email:' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <input className='inputbox' type='password' placeholder='Senha:' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <input className='inputbox' type='password' placeholder='Confirmar senha:' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button type="submit"><b>Cadastrar</b></button>
                </div>
            </form>
        </div>
    )
}
export default NewForm;