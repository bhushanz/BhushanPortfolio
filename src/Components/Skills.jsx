import React from 'react'
import { Sparkles } from 'lucide-react';
import { easeOut, motion } from 'motion/react';
import jsIcon from "../pictures/icons/js.png";
import reactIcon from '../pictures/icons/react.png';
import gsapIcon from '../pictures/icons/gsap.png';
import htmlIcon from '../pictures/icons/html.png';
import cssIcon from '../pictures/icons/css.png';
import bootstrapIcon from '../pictures/icons/bootstrap.png';
import figmaIcon from '../pictures/icons/figma.png';
import tailwindIcon from '../pictures/icons/Tailwind.png';



const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease:easeOut } },
};

const Skills = () => {

    const skills = [
     { src: jsIcon, label: "JavaScript" },
  { src: reactIcon, label: "React" },
  { src: gsapIcon, label: "GSAP" },
  { src: htmlIcon, label: "HTML" },
  { src: cssIcon, label: "CSS" },
  { src: bootstrapIcon, label: "Bootstrap" },
  { src: figmaIcon, label: "Figma" },
  { src: tailwindIcon, label: "Tailwind" },
  ];
  return (
    <div  id='Skills' className='w-full h-fit pb-10  md:pb-40 bg-[#1A1A19]'>
      
       <div className="credit-box w-[80%] m-auto">
          <Sparkles className="md:w-20 md:h-26 text-yellow-400 fill-yellow-400  text-center" />
     <div className=' text-white' >
        <motion.h1
         initial={{ x: -250, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'linear' }}
  viewport={{ once: false, amount: 0.1 }} // 
        className='text-lg md:text-8xl  uppercase'><span className='text-amber-400 '>Tech Stack</span></motion.h1>
        <motion.h1 
        initial={{ x: -250, opacity: 0 }}
  whileInView={{ x: -50, opacity: 1 }}
  transition={{ duration: 0.8, delay:0.5, ease: 'linear' }}
  viewport={{ once: false, amount: 0.1 }} // 
        className='text-lg pl-20 md:text-6xl'>I Work With .</motion.h1>
     </div>

     <div className=' flex md:w-[70%] m-auto md:gap-8 md:mt-10 flex-wrap items-center gap-2 justify-center   mt-5 '>
         <motion.div
      className="flex flex-wrap gap-4 justify-center mt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="w-20 h-20 md:w-30 md:h-32 p-2 py-5 border hover:border-amber-400 hover:scale-105 bg-white rounded-2xl flex flex-col justify-center items-center"
        >
          <img
            src={skill.src}
            alt={skill.label}
            className="object-cover w-[70%] "
          />
          <p className="text-zinc-800 text-[8px] md:text-xs">{skill.label}</p>
        </motion.div>
      ))}


      
    </motion.div>
  
     </div>
     
        </div>
    </div>
  )
}

export default Skills