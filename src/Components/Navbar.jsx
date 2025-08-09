import {  easeInOut, motion } from 'motion/react';
import React, { useState } from 'react'
import { Link } from 'react-scroll';
import CarImg from '../pictures/Fordpng.png'
import HomeImg from '../pictures/Homepng.png'
import AboutImg from '../pictures/Aboutpng.png'
import Skilssimg from '../pictures/skillspng.png'
import ProjectImg from '../pictures/projectpng.png'
import ContactImg from '../pictures/contactpng.png'
import Logo from "../pictures/port-logo.png" ;
import Mlogo from "../pictures/BCoder-m.png"
import clickSound from '../Music/Click.mp3';
import Hover from "../Music/hover.mp3"
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const h1anim = {
  hidden: { opacity: 0, x:-300 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      ease: easeInOut, 
    },
  },
};


const Navbar = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);
 const [Open ,setOpen]=useState(false);

 const toggleMenu =()=>{
  const sound = new Audio(clickSound);
  sound.play();
  setOpen(!Open);
 };

  const Onhover =()=>{
    const music =new Audio(Hover);
    music.play();

  }
     
  return (
 <motion.nav initial={{y:-100 ,opacity:0}} animate={{y:0 ,opacity:1}} transition={{duration:1.8 , delay:1, ease:'linear'}} className=' fixed z-999 top-0 left-1/2 -translate-x-1/2 w-full    md:px-20    py-5  px-5  flex  justify-between items-center  '>

  <div className='  h-11  w-24 md:w-52 md:h-12     '>
   <img className='h-full w-full object-cover md:hidden' src={Mlogo} alt="logo " ></img>
   <img src={Logo} alt=""  className='hidden h-full w-full object-cover   md:block '/>                               
  </div>

    <div
      className="w-8 h-3 flex flex-col justify-between items-center cursor-pointer z-50  "
      onClick={() => {setMenuOpen(!menuOpen); toggleMenu();}}

      
    >
      <span
        className={`block w-full h-[2px] bg-[#FFFF] transform transition duration-300 ease-in-out ${
          menuOpen ? "rotate-42 translate-y-[6px]" : ""
        }`}
      />
      <span
        className={`block w-full h-[2px] bg-[#FFFF] transform transition duration-300 ease-in-out ${
          menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
        }`}
      />
    </div>

 
   <div className= {`mobile-nav ${menuOpen ? 'left-0' : '-left-[130%]'}   S fixed w-full h-screen bg-[#051a27]  top-0  flex items-center pt-20  md:items-end md:pb-10  transition-all duration-500 ease-in-out`}>
     
    <img src={CarImg} alt="" className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  object-cover md:w-1/2 w-[90%] h-[20%] opacity-35  md:h-1/2' />
   

  
<motion.ul variants={containerVariants} initial='hidden' whileInView='show'   className=' relative   w-full  overflow-hidden   md:min-h-full text-2xl md:text-6xl text-[#fffaf3]  font-bold uppercase flex flex-col items-center justify-end '>

 {[
    { to: 'home', label: 'HOME', src:HomeImg },
    { to: 'about', label: 'ABOUT',src:AboutImg  },
    { to: 'Skills', label: 'SKILLS SET',src:Skilssimg  },
    { to: 'projects', label: 'PROJECTS',src:ProjectImg  },
    { to: 'contact', label: 'CONTACT' ,src:ContactImg },
  ].map((item, i) => (
    <motion.li
      key={i}
      variants={h1anim}
      onMouseEnter={()=>Onhover() }
       
      className="  relative px-10 w-full  flex gap-5 p-4 md:hover:px-20 transition-all duration-500 ease-in-out border-b border-[#e7e4e2] md:hover:text-[#3F72AF] md:hover:bg-gray-300"
    >
      <Link
        to={item.to}
        smooth={true}
        duration={500}
        offset={-80}
        onClick={() => setMenuOpen(false)}
        className=" cursor-pointer h-fit w-full "
      >
        <p className="  w-auto  h-full">{item.label}</p>
        <motion.div
  className='absolute top-0 left-30   md:w-full h-full  overflow-hidden'
 whileHover="hover"
  initial="initial"
  animate="initial"
 
>
  <motion.img
    src={item.src}
    alt=""
    variants={{
      initial: { x: '0%', opacity: 0 },
      hover: { x: '90%', opacity: 1 },
    }}
    transition={{ duration: 0.7, ease: 'easeInOut' }}
    className='object-cover  md:w-fit  pointer-events-none h-full'
  />
</motion.div>
      </Link>
     
    </motion.li>
    
  ))}

</motion.ul>

   </div>

 </motion.nav>
  )
}

export default Navbar



