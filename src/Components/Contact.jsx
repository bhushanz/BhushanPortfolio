import { easeInOut, motion } from "motion/react";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import Snapchat from "../pictures/Snapchat.png"


const H1Varient = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const LetterVariant = {
  hidden: { y: 80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const Contact = () => {
  const text = "Let's connect .";
  return (
    <div
      id="contact"
      className="w-full h-fit pt-5 border-t rounded-2xl bg-[#3c3c3c] "
    >
      <div className="w- m-auto md:p-20 p-5 h-full text-amber-50 ">
        <div className=" ">
          <motion.h1
            variants={H1Varient}
            initial="hidden"
            whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
            className="  text-2xl md:text-8xl  uppercase "
          >
            {text.split("").map((char, indx) => (
              <motion.span
                key={indx}
                variants={LetterVariant}
                className={`${indx === 0 ? "text-6xl md:text-9xl text-amber-400" : ""}`}
              >
                {char === "" ? "u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p initial={{y:30 ,opacity:0}} whileInView={{y:0 ,opacity:1}} viewport={{once:true ,amount:0.3}} transition={{duration:1 , ease:easeInOut}}  className="para mt-4 px-2 text-sm md:w-[80%] md:text-xl font-medium">Got an idea ? Need a website ? Or just want to say hi ? My inbox is always open.</motion.p>
        </div>

         <div className="w-full md:w-[60%] md:h-[40%] m-auto pt-5 h-fit   md:flex    " >
            <div className=" mt-8 space-y-4 md:flex md:flex-wrap md:gap-10 md:mt-5  items-center justify-center md:m-auto">
      {/* Phone */}
      <div>
        <h1 className=" para text-amber-400 text-xl font-bold flex items-center gap-2 mb-1">  <IoCallOutline className="text-sky-400"/>  Phone</h1>
         <p className=" uppercase px-6 text-xs">
        
          <a href="tel:+919022020882" className="hover:underline">
           
            +91&nbsp;90220&nbsp;20882
          </a>
        </p>
      </div>

      {/* Email */}
      <div>
        <h1 className="para text-amber-400 text-xl font-bold flex items-center gap-2 mb-1">< MdOutlineMail className="text-purple-400"/>Email</h1>
       <p className=" uppercase px-6 text-xs">
          <a
            href={`mailto:${"mrbhushan006"}@${"gmail.com"}`}
            className="hover:underline"
          >
            mrbhushan006@gmail.com
          </a>
        </p>
      </div>

   

      {/* Instagram */}
      <div>
        <h1 className="para text-amber-400 text-xl font-bold flex items-center gap-2 mb-1"> < IoLogoInstagram className="text-pink-400"/>Instagram</h1>
      <p className=" uppercase px-6 text-xs">
          <a
            href="https://www.instagram.com/bhu_shan__/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @bhu_shan__
          </a>
        </p>
      </div>

      {/* GitHub */}
      <div>
        <h1 className="para text-amber-400 text-xl font-bold flex items-center gap-2 mb-1"><FiGithub className="text-blue-400"/> GitHub</h1>
        <p className=" uppercase px-6 text-xs">
          <a
            href="https://github.com/bhushanz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/bhushanz
          </a>
        </p>
      </div>
            </div>
          
             
      </div>
      <hr className="bg-red-400 md:mt-15 mt-5  m-auto border border-zinc-50" />
          <h1 className=" para text-xs uppercase  w-full text-center mt-5 md:mt-5 m-auto">Made with ❤️ by Bhushan Zombade © 2025</h1>
        
      </div>
      
    </div>
  );
};

export default Contact;
