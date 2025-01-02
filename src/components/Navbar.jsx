import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { assets } from './../assets/assets';
import './Navbar/Navbar.css';



const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
       <Link to='/' ><img src={assets.legend} alt="" className="log" /></Link>
       <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href= "#FoodDisplay" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
       </ul>
       <div className="navbar-right">
      
    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
   
</div>
<button onClick={()=>setShowLogin(true)}>sign in</button>
       </div>
   
  )
}

export default Navbar