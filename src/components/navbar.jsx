import React from "react";
import { Link } from "react-router-dom";

function Nav(){   
    return(
        <div className="bg-slate-950 p-7">
    
        <div className="space-x-5 text-orange-600 ml-[800px]">
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/Gallery'>Gallery</Link>
        <Link to='/services'>Services</Link>
        <Link to='/Contacts'>Contacts</Link>
        </div> 
       </div> 
    )
}
export default Nav;