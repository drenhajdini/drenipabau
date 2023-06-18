import React from 'react'
import { useNavigate } from "react-router-dom";

const AntiWrinkle = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>AntiWrinkle</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default AntiWrinkle
