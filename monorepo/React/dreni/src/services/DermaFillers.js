import React from 'react'
import { useNavigate } from "react-router-dom";

const DermaFillers = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>DermaFillers</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default DermaFillers
