import React, {useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'

import { AuthProvider, AuthContext } from '../services/auth'

const Rotas = () => {
    const Private = ({children}) =>{
        const {authenticated, loading } = useContext(AuthContext)
        
        if(loading){
            return <div className='loading'>Carregando ...</div>
        }
        if(!authenticated){
            return <Navigate to='/'/>
        }

        return (children)
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/home" element={<Private><Home /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default Rotas