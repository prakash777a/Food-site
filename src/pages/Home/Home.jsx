import React, { useState } from 'react';
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import './Home.css';


const Home = () => {
  const [category,setCategory]=useState();
  return (
    <div>
    <Header/>
    
    <FoodDisplay/>
    
    </div>
  )
}

export default Home