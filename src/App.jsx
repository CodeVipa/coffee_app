import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Service from"./pages/services";
import Footer from "./components/footer";
import Contacts from"./pages/contacts"

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/services'));

function App() {
  return (
    <>

      <Router>
        <Suspense fallback={<p className="md:text-center my-5 p-5 text-slate-900">Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/gallery" element={<Gallery />} /> 
            <Route path="/services" element={<Service/>} /> 
            <Route path="/contacts" element={<Contacts/>} /> 
          </Routes>
          <Footer/>
        </Suspense>
      </Router>
      
    </>
  );
}

export default App;
