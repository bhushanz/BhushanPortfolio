import LocomotiveScroll from "locomotive-scroll";
import { easeInOut, motion } from "motion/react";
import React from "react";
import Marque from "./Marque";
import Classic from '../pictures/classic-retrocar.png'
import aboutImg from '../pictures/about-img.jpg';


const About = () => {

 
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <motion.div id="about" 
        initial={{ backgroundColor: "#0a293c" }}
        whileInView={{ backgroundColor: "#1A1A19" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full relative min-h-full pb-20 md:pb-30  md:min-h-[850px] "
      >

       
        <Marque  />
       
        <div className="w-full  md:mt-20  mt-5 md:h-[80vh]  m-auto    md:flex md:flex-row justify-around gap-3 items-center flex-col  text-white">
        
          <div className="about overflow-hidden w-[90%] md:w-[40%]    md:pr-5   md:text-2xl uppercase md:text-right text-center ">
              
            <motion.p
             initial={{x:-90 , opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{duration:1.8,ease:easeInOut}} 
             viewport={{ once: false, amount: 0.3 }}
             className="w-full md:mb-2 text-amber-400 pb-2 text-2xl md:text-3xl"> hi ! im bhushan </motion.p>
            <motion.p 
              initial={{x:100 , opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{duration:1.8,ease:easeInOut}} 
             viewport={{ once: true, amount: 0.3 }}
            className="md:pr-5 pb-2  text-xs md:text-xl "> A Frontend developer .</motion.p >

            <motion.div 
              initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:1.8,ease:easeInOut}} 
             viewport={{ once: false, amount: 0.5 }}
            className="  md:block">
              <button className="relative   md:h-10 md:w-[13vw] w-45 mt2 h-10 border border-white md:mt-4 cursor-pointer overflow-hidden group">
                {/* background hover fill */}
                <div className="absolute inset-0 bg-rose-800 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out z-0" />

                {/* text on top */}
                <p className="text-xs uppercase text-white w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  Download Resume
                </p>
              </button>
               <div className="w-32 h-25   float-right">
                  <img src={Classic} alt="" className="w-full h-full object-contain" />
            </div>
            </motion.div>
          </div>

          <div
            data-scroll
            data-scroll-speed="0.2"
            className=" md:relative w-[78%] h-[65vh] rounded-2xl md:rounded-none   m-auto mt-5 md:w-[28%] md:h-[95%]  md:flex"
          >
           
            <img
              src={aboutImg}
              alt="about"
              className="  w-full h-full object-cover"
            />
           
            <h1 className=" absolute object-cover hidden md:block   bg-rose-800  md:top-5 md:-left-18 md:-rotate-26  md:text-5xl text-amber-400 ">
              Bhushan
            </h1>
          </div>

          <div
           
            className="md:w-[40%] md:h-[80%] flex md:px-4  md:items-center   w-[90%] m-auto   border-amber-100"
          >
          <div     data-scroll
            data-scroll-speed="0.3" className=" text-right  h-fit -mt-10   ">
              <p  className="text-white  text-sm md:pr-5  ">
              Driven by curiosity, creativity, and a commitment to crafting
              beautiful web solutions.
            </p>
            <p className=" para text-sm text-left text-zinc-400  capitalize pt-5 ">
              a passionate frontend web developer with a keen eye for detail and
              a love for creating visually appealing and user-friendly
              interfaces. With expertise in html, CSS, and JavaScript, I enjoy
              transforming complex ideas into elegant, responsive designs. I'm
              dedicated to continuous learning and staying updated with the
              latest trends and technologies in web development. Let's work
              together to bring your digital ideas to life!
            </p>
           
          </div>
          </div>

        </div>
        <div   className="relative para w-full md:w-[80%] md:min-h-92 hidden md:block	  m-auto">
           {/* Background div behind paragraph */}
  <div className="absolute top-0 left-0 w-full h-full z-0 rounded-md">
     {/* First yellow circle */}
  <motion.div 
  initial ={{y: 20,x: 0 }} 
  animate={{y:-50 ,x:-70}}
   transition={{duration:1.5 ,ease:easeInOut ,repeat: Infinity, repeatType: "reverse",}} 
   className="absolute md:w-[500px] md:h-[500px] bg-yellow-400/30 rounded-full top-0 right-10 mix-blend-color-burn blur-xl opacity-80" />
  
  {/* Second yellow circle overlapping */}
  <motion.div 
  initial={{y:10 ,x:0}}
  animate={{y:-40 ,x:50}}
  transition={{duration:1.5 ,ease:easeInOut ,repeat:Infinity ,repeatType:'reverse'}}
  className="absolute md:w-[500px] md:h-[500px] bg-yellow-400/30 rounded-full top-0 right-0 mix-blend-color-burn blur-xl opacity-60"/>

    </div>

  {/* Foreground paragraph */}
  <div className="absolute z-10 top-0">
    <p className="md:text-4xl text-zinc-400 md:p-5 leading-[1.2] font-semibold capitalize">
      I’m a Computer Science graduate and passionate Frontend Developer who builds modern, responsive websites using
      <span className="underline"> HTML</span>,
      <span className="underline"> css</span>,
      <span className="underline"> javascript</span>,
      and <span className="underline"> react</span>. I focus on writing clean code and bringing creative designs to life with smooth animations using libraries like <span className="underline"> framer motion</span>, <span className="underline"> gsap</span>, and more. I love crafting user-friendly experiences and I'm always eager to learn new tools and improve my skills every day.
    </p>
  </div>
             
        </div>
        
      </motion.div>
    
    </>
  );
};

export default About;
