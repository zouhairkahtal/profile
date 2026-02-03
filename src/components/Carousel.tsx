'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';
import BlurText from "../components/BlurText";
import Arrow from "../../public/svg/arrow-right-svg.svg";
import { NavLink } from "react-router-dom";
import Instagram from "../../public/svg/media/instagram-svgrepo-com.svg";
import Github from "../../public/svg/media/github-142-svgrepo-com.svg";
import Linkedin from "../../public/svg/media/linkedin-svgrepo-com.svg";

 const items = [
  {
    id:1,
    div: (
      <div className="w-full h-full pl-5  ">
        <h1 className="text-primary text-4xl uppercase mt-16 italic font-bold flex items-center ml-2 font-reem">
          قصة
          <span className="rotate-90 mt-2">
            <img src={Arrow} className="w-10" alt="arrow" />
          </span>
        </h1>

        <h2 className="select-none uppercase text-primary font-light text-3xl">
          The story starts
        </h2>

        <p className="text-primary max-w-[450px] mt-6">
          when I first explored the world of web design, fascinated by how lines
          of code could create something interactive and beautiful. It was
          during my early days in tech that I realized I could combine logic and
          creativity. But my passion isn’t limited to screens—I also love
          drawing. With every stroke of a pencil, I find a way to express what
          words can’t.
        </p>

        <BlurText
          text="Between coding and sketching, I’ve found a balance that keeps me inspired every day."
          delay={50}
          animateBy="words"
          direction="top"
          className="text-secondary text-4xl uppercase font-extrabold mt-10"
        />
     
      </div>
    )
    
  }
,  {
    id:2,
    div: (
      <div className="w-full pl-5 center   ">
        <h1 className="text-secondary text-4xl uppercase mb-10 mt-6  font-bold flex items-center ml-2 font-reem">
        Personal information 
        
        </h1>

       

        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
         NAME: <span className='font-reem text-5xl max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg '> زهير قحطل </span>
        </h1>
        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
         Location:<span className='text-secondary text-3xl'> Casablanca, Morocco</span>
        </h1>
        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
    hobbies: <span className='text-secondary text-3xl'>
      
      <NavLink to={"/DrawingPage"}>

       <span className='hover:bg-primary hover:text-black hover:cursor-pointer'>drawing</span>
      </NavLink>
       
       , <span
       className='hover:bg-primary hover:text-black hover:cursor-pointer'
       >programming</span> 
       
       
       
       </span>
        </h1>
        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
   age: <span className='text-secondary text-3xl'> <span className='text-3xl  font-extrabold  text-primary'> ١٩</span> years old</span>
        </h1>
        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
   e-mail: 
    <NavLink to="/contact" >
   <span className='text-secondary text-3xl  hover:cursor-pointer underline  decoration-secondary ml-2 hover:decoration-primary hover:text-primary  transition ease-in-out '>mizouhair4@gmail.com</span>
    </NavLink>
        </h1>


      <div className=" flex  items- gap-2 mt-16 ">
                   <a href="https://www.instagram.com/zouhair.k.18/" target="_blank">

                  <img
                    className="w-10 max-[530px]:w-8"
                    src={Instagram}
                    alt="instagram"
                    />
                    </a>
                    <a href="https://github.com/zouhairkahtal" target="_blank">

                  <img
                    className="w-10 max-[530px]:w-8"
                    src={Github}
                    alt="githube"
                    />
                    </a>
                    <a href="https://www.linkedin.com/in/zouhair-kahtal-98084b337/" target="_blank">

                  <img
                    className="w-10 max-[530px]:w-8"
                    src={Linkedin}
                    alt="Linkedin"
                    />
                    </a>
                </div>

    
               
      </div>
    )
    
  }
,  {
    id:3,
    div: (
      <div className="w-full pl-5 center  bg-white ">
        <h1 className="text-secondary text-4xl uppercase mb-10 mt-6  font-bold flex items-center ml-2 font-reem">
        Personal information 
        
        </h1>

       

        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
         NAME: <span className='font-reem text-5xl max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg '> زهير قحطل </span>
        </h1>
        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
         Location:<span className='text-secondary text-3xl'> Casablanca, Morocco</span>
        </h1>
        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
    hobbies: <span className='text-secondary text-3xl'> drawing, programming.</span>
        </h1>
        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
   age: <span className='text-secondary text-3xl'> <span className='text-3xl  font-extrabold  text-primary'> ١٩</span> years old</span>
        </h1>
        <h1  className="text-primary text-4xl uppercase font-bold mt-5 max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg ">
   e-mail: <span className='text-secondary text-3xl hover:decoration-secondary hover:cursor-pointer hover:underline hover:decoration-6'>  mizouhair4@gmail.com</span>
        </h1>


      <div className=" flex  items- gap-2 mt-16 ">
                  <img
                    className="w-12 max-[530px]:w-8 hover:cursor-pointer"
                    src={Instagram}
                    alt="instagram"
                  />
                  <img
                    className="w-12 max-[530px]:w-8 hover:cursor-pointer"
                    src={Github}
                    alt="githube"
                  />
                  <img
                    className="w-12 max-[530px]:w-8 hover:cursor-pointer"
                    src={Linkedin}
                    alt="Linkedin"
                  />
                </div>

    
               
      </div>
    )
    
  }
];


export  function FramerCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <div className='w-full h-full   '>
      <div className='flex flex-col h-full  '>
        <div className='relative overflow-hidden  h-full flex flex-col justify-between' ref={containerRef}>
          <motion.div className='flex' style={{ x }}>
            {items.map((item) => (
                <div key={item.id} className="min-w-full">

               {item.div}
                </div>
            ))}
          </motion.div>

          

        
          {/* Progress Indicator */}
          <div className=' flex justify-end items-center pr-2 h-10  '>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-4 p-2 rounded-full transition-all ml-1 ${
                  i === index ? 'w-8 bg-primary' : 'w-2 bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}