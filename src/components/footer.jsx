import React from "react"
import { Link } from "react-router-dom";
import icon from"../assets/images/mail-icon.png"
import address from"../assets/images/map-icon.png"

function Footer(){
 return(
<>
<div className="flex bg-black text-white space-x-8 p-16">
    <div className="">
        <h1 className="font-bold text-2xl p-3">About </h1>
    <p className="">Liman café a great place to discover </p> 
    <p>and explore the great wonders</p>
         
    
    </div>
   <div className="">
   <h1 className="text-2xl font-bold p-3">Menu</h1>
    <ul>
        <li><Link to='/'>Home</Link></li>
       <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/Gallery'>Gallery</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/Contacts'>Contacts</Link></li>
    </ul>
    
    
   </div>
   <div>
    <h1 className="text-2xl font-bold space-x-4 p-3">USEFUL LINKS</h1>
    <p >Simply  taking a moment for yourself. Join us, and</p>
    <p> discover a Liman where comfort meets quality in every sip.</p>
   </div>
   <div>
    <h1 className="text-2xl font-bold p-3">Contacts</h1>
   <ul>
    
  
   <li className="flex gap-x-3 p-1">
        <img src={address} alt="" />
        <span><Link to='/Contacts'>address:Gasabo-Gisozi</Link></span>
        </li>
        
    <li className="flex gap-x-3 p-1">
        <img src={icon} alt="" />
        <span>email:jirehfai11@gmail.com</span>
        </li>
   </ul>
   </div>
</div>
</>
 );
}
export default Footer;