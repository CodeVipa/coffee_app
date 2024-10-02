import React from "react"
import Nav from"../components/navbar.jsx"
import imagee from"../assets/images/img-10.png"


function Contacts(){
    const background ={
        backgroundImage:`url(${imagee})`,
        width:"600px",
        height:"451px",


    }
    return(
<>
<Nav/>
<div>
    <div className="p-11">
        <h1 className="text-orange-600 font-bold p-6 text-3xl text-center">CONTACT US</h1>
    </div>
    <div style={background}>
    <form className="w-full p-4 ">
    <div className="flex flex-col w-[50%] space-y-4 ">
    <input type="text" placeholder="Username" className="p-3 border rounded-full bg-gray-200"/>
    <input type="text" placeholder="Email" className="p-3 rounded-full bg-gray-200"/>
    <input type="number" placeholder="Phone number" className="p-3 rounded-full bg-gray-200"/>
    <textarea name="Message" id="" cols={30} className="p-3 rounded-full bg-gray-200 " placeholder="Message"></textarea>
    <button className="p-3 text-xl rounded-full bg-slate-500 w-24 ">Send</button>
    </div>
   
</form>
    </div>
 </div>

</>

    );
}

export default Contacts;