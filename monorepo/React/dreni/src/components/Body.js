import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AntiWrinkle from '../services/AntiWrinkle';
import { Outlet, Link } from "react-router-dom";
import './Body.css'
import { UilGrin,UilAngleRight } from '@iconscout/react-unicons'


const Body = () => {


  return (
    
    
    <div className='navigationContainer'>
    
    <ul>
        <Link className='link' to='/antiwrinkle'>  Anti Wrinkle Treatment <UilAngleRight size="33" color="#DAD8D8"/></Link>
        <Link className='link' to='/SecretRF'>  Secret RF <UilAngleRight size="33" color="#DAD8D8"/></Link>
        <Link className='link' to='/DermaFillers'>  Derma Fillers <UilAngleRight size="33" color="#DAD8D8"/></Link>
        <Link className='link' to='/Facials'>  Facials <UilAngleRight size="33" color="#DAD8D8"/></Link>
        
    </ul>


      <Routes>
        <Route path="/antiwrinkle " element={<AntiWrinkle/>} />
      </Routes>

    </div>
    
    )
}

export default Body
