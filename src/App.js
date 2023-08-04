import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import { useState } from "react";
import { createContext } from "react";
import authContext from "./context/authContext";



export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  
  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
    
        <Route exact path="login" element={<Login />} />
          
        
      </Routes>
    </BrowserRouter>
    </authContext.Provider>
  );
}

