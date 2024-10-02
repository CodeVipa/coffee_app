import React from "react";
import banner from "../assets/images/banner.png";
import Nav from "../components/navbar";
import about from "../assets/images/about.png";
import image from"../assets/images/img.png"
import Coffee from"../assets/images/image.png"
import Image from"../assets/images/cof.png"
import Img from"../assets/images/imag.png"
import Imge from"../assets/images/img-7.png"
import coof from"../assets/images/coof.png"
import coffee  from"../assets/images/coffee.png"
import coffe from"../assets/images/coffe.png"
import last from"../assets/images/img-6.png"
import services from "../assets/images/services-bg.png"
import icon1 from"../assets/images/icon1.png"
import icon2 from"../assets/images/icon2.png"
import icon3 from"../assets/images/icon3.png"
import imagee from"../assets/images/img-10.png"


function Home() {
  const background ={
    backgroundImage:`url(${imagee})`,
    width:"600px",
    height:"450px",


}
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
 const backgrounds={
  backgroundImage:`url(${services})`,
  width:"100%",
  height:"500px",
  backgroundSize: "cover",
  backgroundPosition: "center",

}
  const backgroundStyle = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    flexDirection: "column",
    textAlign: "left",
  };
  return (
    <>
    <Nav />
      <div style={backgroundStyle}>
        <h1 className="text-black font-serif text-6xl p-3 ml-10 mt-10">
          Outstanding coffee
        </h1>
        <h2 className="text-6xl p-6 text-white-500 font-bold ml-10">
          Coffee shop
        </h2>
        <p className="text-white text-xl leading-relaxed ml-10 ">
          {" "}
          Start your day with a sip of bliss.Handcrafted coffee
        </p>
        <p className="text-white text-xl leading-relaxed ml-10">
          roasted to perfection, delivering warmth, comfort, and bold flavors in
          every cup.
        </p>
        <button className=" mr-[auto] bg-gray-900 text-white  p-3 mt-16 ml-10">
          LEARN MORE
        </button>
      </div>
      <section>
      <div className="flex gap-5 p-5 ">
        <div className=" w-[40rem] justify-start ml-8">
          <h1 className="text-orange-600 font-bold p-10 text-5xl">ABOUT US</h1>
          <p className="">
            Welcome to Liman Café,your cozy escape where every cup of coffee
            tells a story. we believe coffee is more than just a drink—it's an
            experience.{" "}
          </p>
          <p>
            From sourcing the finest beans to handcrafting every cup, our
            passion for quality shines through.{" "}
          </p>
          <p>
            Whether you're catching up with friends or enjoying a quiet moment,
            we're dedicated to serving exceptional coffee every time."
          </p>
          <p>
            {" "}
            Liman Café is a haven of comfort and quality, inviting you to savor
            every sip."
          </p>
          <div className="my-10 mx-5 bottom-5 p-2">
            <button className="p-2 bg-slate-900 text-white cursor-pointer rounded">LEARN MORE</button>
          </div>
        </div>
        <div className="w-[500px] h-full">
          <img src={about} className="h-full ml-auto mt-0 w-full" />
        </div>
      </div>
      </section>
      <section>
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
        </div>
        </section>
        <section>
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

        </section>
        <section>
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
        </section>
    </>
  );
}
export default Home;
