import React from "react";
import Nav from "../components/navbar";
import image from"../assets/images/img.png"
import Coffee from"../assets/images/image.png"
import Image from"../assets/images/cof.png"
import Img from"../assets/images/imag.png"
import Imge from"../assets/images/img-7.png"
import coof from"../assets/images/coof.png"
import coffee  from"../assets/images/coffee.png"
import coffe from"../assets/images/coffe.png"
import last from"../assets/images/img-6.png"


 const gallery=[
    {
        id:'1',
        title:"image 1",
        image:image,
    },
    {    
        id:'2',
        title:"image 2",
        image:Coffee,
    },
    {   
        id:'3',
        title:"image 3",
        image:Image,
    },
    {
        id:'4',
        title:"image 4",
        image:Img,
    },
    {
        id:'5',
        title:"image 5",
        image:Imge,
    },
    {
        id:'6',
        title:"image 5",
        image:coffee,
    },
    {
        id:'7',
        title:"image 5",
        image:coof,
    },
    {
        id:'8',
        title:"image 5",
        image:coffe,
    },
    {
        id:'9',
        title:"image 5",
        image:last,
    }
 ]
function Gallery(){
    return(
        <>
        <Nav/>
        <div>
            <h1 className="text-orange-600 font-bold text-4xl text-center p-3 mt-9">OUR GALLERY</h1>
              <p className="text-center p-3">
              Welcome to our gallery! Explore stunning images that celebrate our love for coffee, capturing its rich flavors and vibrant culture. Each photo invites you to indulge in the magic of every cup, showcasing the beauty and artistry behind our beloved coffee. Join us in this delightful experience!
             </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {gallery.map((item,id)=>(
            <div key={id} className="relative overflow-hidden rounded-lg shadow-lg">
                <img src={item.image} alt="" className="w-full  object-cover h-full" />
            </div>
            ))}
            <div className="text-center ml-[500px] p-8 text-yellow-50 bg-black w-40 h-14 rounded-md mt-8 mb-[60px]">
                <button className="  text-xl">See more</button>
            </div>
        </div>
        </>
    );
}
export default Gallery;