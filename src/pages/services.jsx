import React from "react";
import Nav from"../components/navbar.jsx"
import services from "../assets/images/services-bg.png"
import icon1 from"../assets/images/icon1.png"
import icon2 from"../assets/images/icon2.png"
import icon3 from"../assets/images/icon3.png"



function Services(){
    const backgrounds={
        backgroundImage:`url(${services})`,
        width:"100%",
        height:"500px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    
    }
    return(
<>
<Nav/>
<div style={backgrounds}>
    <div className=""> 
        
<h1 className="text-6xl text-center font-bold text-orange-600 p-10">SERVICES</h1>
<h2 className="text-center">Discover rich, flavorful coffee blends in a warm, inviting space designed for true coffee enthusiasts.</h2>
</div>
<div className="flex grid-cols-2 space-x-24">
<div className="border-full bg-orange-600 text-white w-[300px] h-[220px] ml-20 mt-14 rounded-md cursor-pointer">
<div className="">
<img src={icon1} className="w-12 object-cover ml-32 translate-y-12" /></div>
<h1 className="text-center text-3xl p-3 mt-14">original cofee</h1>
<p className="ml-6">it's not just the coffee ,it's an experience</p>
</div>
<div className="border-full bg-orange-600 text-white w-[300px] h-[220px] ml-20 mt-14 rounded-md cursor-pointer">
    <div><img src={icon2} className="w-12 object-cover ml-32 translate-y-6"  /></div>
    
    <h1 className="text-center text-3xl p-3 mt-8">Coffee flavors</h1>
    <p className=" ml-6 ">savor every sip of the exceptional coffee everytime</p>
</div>
<div className="border-full bg-orange-600 text-white w-[300px] h-[220px] ml-20 mt-14 rounded-md cursor-pointer">
    <div className="mb-8"><img src={icon3} className="w-12 object-cover ml-32 translate-y-6 " /></div>
    <h1 className="text-center text-3xl p-3 mt-6">Pleasant Ambient</h1>

    <p className="ml-6 mb-14">  flavorful coffee blends in a warm, inviting space designed for true coffee enthusiasts.</p>
</div>
</div>
    
    </div>


</>

    );
}
export default Services;