import React from "react";
import about from "../assets/images/about.png";
import Nav from "../components/navbar";
function About() {
  return (
    <>
    <Nav/>
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
    </>
  );
}
export default About;
