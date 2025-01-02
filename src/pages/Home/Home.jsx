import React, { useState } from 'react';
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import './Home.css';


const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
    <Header/>
    
    <FoodDisplay category={category} />
    
    </div>
  )
}

export default Home