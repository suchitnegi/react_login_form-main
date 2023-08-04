import React from 'react';

const Card = ({ title, buttonText1,buttonText2, onClick }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <button onClick={onClick}>{buttonText1}</button>
      <button onClick={onClick}>{buttonText2}</button>
    </div>
  );
};

export default Card;
