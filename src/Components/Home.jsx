import { motion ,easeInOut,  } from "motion/react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import React, { useState } from "react";
import Picsart from "../pictures/Picsart.png"
import Gray from "../pictures/gray.png"
import right from "../pictures/right.png"

const Home = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 30;
    const y = ((clientY - top) / height - 0.5) * 30;

    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div  id="home"  className=" w-full h-[90vh] md:h-screen  bg-[#0a293c]   flex flex-col items-center justify-center  gap-10">
      <div className="relative w-full md:w-[90%] md:h-[90%]  text-[#ffff] overflow-hidden h-[60%] flex flex-col gap-3 items-center justify-center  text-center">
        
            <motion.div initial={{opacity:0}} animate={{opacity:1,}} transition={{duration:1, delay:3,ease:'linear'}} className="links h-[60%]  m-auto  absolute right-0 w-20 md:flex flex-col hidden gap-10 text-3xl items-center justify-center  ">
             <a href="https://www.facebook.com/bhushan.z.2025/" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600 ">
        <FaFacebookF />
      </a>
      <a   href="https://www.instagram.com/bhu_shan__/" target="_blank" rel="noopener noreferrer" className=" hover:text-pink-500 ">
        <FaInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" hover:text-sky-500 ">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/bhushan-zombade" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-700 ">
        <FaLinkedinIn />
      </a>
              </motion.div>  

        <motion.h1
         className="text-4xl   w-[90%] md:w-full flex  justify-between md:block  md:text-9xl overflow-hidden"
        >
          {" "}
          <motion.span initial={{x:-100, opacity:0 ,rotate:-40}}
           animate={{x:0,opacity:1 ,rotate:-10}}
            transition={{duration:2,delay:1 ,ease:'easeInOut'}}
             className="inline-block   ">Front</motion.span>
              <motion.span initial={{x:100, opacity:0 ,rotate:40}}
               animate={{x:0,opacity:1 ,rotate:10}} 
                transition={{duration:2,delay:1,ease:'easeInOut'}}  className=" home-hang inline-block text-amber-400  " >end </motion.span>

        </motion.h1>

        <motion.div
        initial={{y:490, }}
        animate={{y:0 ,}}
        transition={{duration:1,ease:'easeIn'}}
          className=" w-56 h-70    md:h-[66%]  md:w-[24%]   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-40 "
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: "1000px",
          }}
        >

          <img
            src={Picsart}
            alt=" homePhoto"
            className="w-full    h-full object-cover  drop-shadow-[0_0_20px_rgba(0,0,0,0.4)] z-30"
            style={{
              transform: `translate(${transform.x}px, ${transform.y}px)`,
              transition: "transform 0.2s ease-out",
              willChange: "transform",
            }}
          />

          <div
            className="w-full m-auto h-5   "
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 5), rgba(0, 0, 0, 1))",
              width: "95%",
              height: "10px",
              border: "none",
              opacity: 0.4,
              filter: "blur(5px)",
            }}
          ></div>
          <p className="text-amber-400 text-xs -mt-3 md:mt-0">BHUSHAN ZOMBADE .</p>
          
        </motion.div>

        <motion.h1 
        
        className="text-4xl  mt-5  md:w-[100%]   w-[90%] flex justify-between  md:block   md:text-9xl overflow-hidden ">
          <motion.span initial={{x:-200 ,opacity:0}} animate={{x:0 ,opacity:1}}  transition={{duration:2, delay:1 ,ease:easeInOut}} className="inline-block ">Deve</motion.span> 
          <motion.span initial={{x:200 , opacity:0}} animate={{x:0 ,opacity:1}}  transition={{duration:2, delay:1 ,ease:easeInOut}} className="inline-block ">loper</motion.span>
        </motion.h1>

        <div className=" w-[80%] h-20 md:h-25">
          <div className="w-full  m-auto h-full  flex justify-center md:gap-60 gap-20  "
          
          
          >
            <motion.img
            initial={{x:80, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:3,ease:'easeIn'}}
              src={right}
              alt=" carimg"
              className="md:w-38  object-cover "
            />
            <motion.img
             initial={{x:-80, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:3,ease:'easeIn'}}
            src={Gray}
              alt=" carimg"
              className="md:w-40 object-cover"
            />
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Home;
