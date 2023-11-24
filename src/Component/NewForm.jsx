import { useState } from "react";

const NewForm = ({addDados}) => {

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nome && email && password){
            if(password === passwordConfirm){
                addDados(email, password);
                setNome("");
                setEmail("");
                setPassword("");
                setPasswordConfirm("");
                alert("Cadastrado!!!");
            }else{
                alert("Senha inválida");
            }
        }else{
            alert("Inválidado");
        }
    }

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