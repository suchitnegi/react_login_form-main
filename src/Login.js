import { useRef, useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import authContext from "./context/authContext";


import Homepage from './Homepage';

const Login = () => {
    const { setAuthenticated } = useContext(authContext);

    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
   
    

    const handleSubmit = async (e) => {
        e.preventDefault();
            if(user === "amandeepbisht@gmail.com" && pwd === "12345")
            {
            setAuthenticated(true);
            
            }
            
            navigate('/');    
    }

    return (
        <>
    
        <section >
                    
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                        
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    
        </section>
            
        </>
    )
}

export default Login
