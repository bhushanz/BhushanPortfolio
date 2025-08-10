import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Preloader from "./Components/Preloader";

const App = () => {
  useEffect(() => {
    // Disable browser scroll memory
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

 const [isLoading, setIsLoading] = useState(true);

 useEffect(()=>{
     const timer =setTimeout(()=>{
       setIsLoading(false);
     },2500)
      return () => clearTimeout(timer);
 },[])

 
  return (
    <>  
       <Preloader  isLoading={isLoading}/>
         
         {!isLoading && (
          <div className="  bg-[#1A1A19]">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
         )}
      
    </>
  );
};

export default App;
