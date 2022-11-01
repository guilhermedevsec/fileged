import React, {createContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { api, createSession } from './api'

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const navigate = useNavigate();
    const[user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const recoveredUser = localStorage.getItem('usuario');
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);

    }, []);

    const login = async (usuario, senha) =>{
    
        const response = await createSession(usuario, senha)
        console.log('login', response.data)

        const loggedUser = response.data.usuario;
        const token = response.data.token

        localStorage.setItem('usuario', JSON.stringify(loggedUser))
        localStorage.setItem('token', token)

        api.defaults.headers.Authorization = `Bearer ${token}`

            setUser(loggedUser);
            navigate("/home")
        
    };

    const deslogar = () =>{
        console.log("atentando deslogar")
        localStorage.removeItem("usuario")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null
        setUser(null)
        navigate("/")
    };

    return(
        <AuthContext.Provider value={{authenticated : !!user, user, loading, login, deslogar}}>
                {children}               
            </AuthContext.Provider>
    )
}