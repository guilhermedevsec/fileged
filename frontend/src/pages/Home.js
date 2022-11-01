import React, {useContext} from 'react'
import { AuthContext } from '../services/auth'

function Home() {

  const { authenticated, deslogar } = useContext(AuthContext)
  
  const Deslogar = () =>{
    deslogar()
  }

  return (
    <div>
      <p>{String(authenticated)}</p>
      <h1>Home</h1>
      <button onClick={Deslogar}>logout</button>
    </div>
  )
}

export default Home