import React from 'react';
import Card from './Card';
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
// import Login from './Login';
import { useState,useContext } from 'react';
import authContext from "./context/authContext";


const Homepage = () => {
  const navigate = useNavigate();
  const { authenticated,setAuthenticated } = useContext(authContext);
  


  const handleButtonClick = (buttonText) => {
    
    if(authenticated)
    alert("you are authenticated user")
    else
    navigate('/login');
    
    
  };

  return (
    <div className="homepage">
      <h1>Welcome to the Homepage</h1>
      <div className="card-container">
        <Card
          title="Card A"
          buttonText1="Add to Deals"
          
          onClick={() => handleButtonClick('A')}
          buttonText2="Check Details"
          onClick={() => handleButtonClick('A')}
        />
        <Card
          title="Card B"
          buttonText1="Add to Deals"
          buttonText2="Check Details"
          onClick={() => handleButtonClick('B')}
        />
        <Card
          title="Card C"
          buttonText1="Add to Deals"
          buttonText2="Check Details"
          onClick={() => handleButtonClick('B')}
        />
        <Card
          title="Card D"
          buttonText1="Add to Deals"
          buttonText2="Check Details"
          onClick={() => handleButtonClick('B')}
        />
        <Card
          title="Card E"
          buttonText1="Add to Deals"
          buttonText2="Check Details"
          onClick={() => handleButtonClick('B')}
        />
      </div>
    </div>
  );
};

export default Homepage;
