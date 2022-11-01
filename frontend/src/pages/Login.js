import React, {useState, useContext} from 'react'
import { AuthContext } from '../services/auth'

const Login = () => {
  const { authenticated, login} = useContext(AuthContext)

  const[usuario, setUsuario] = useState("")
  const[senha, setSenha] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("submit", {usuario, senha})
    login(usuario, senha)
  }


  return (
    <div>
      <p>{String(authenticated)}</p>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input type="text" name="usuario" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <label>Senha</label>
        <input type="password" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
        <button type="submit">Logar</button>
      </form>
    </div>
  )
}

export default Login