import Logo from "../../public/svg/Logo.min.svg";
import Arrow from "../../public/svg/arrow-right-svg.svg";
import Me from "../assets/homePagePhoto/me.png";
import Instagram from "../../public/svg/media/instagram-svgrepo-com.svg";
import Github from "../../public/svg/media/github-142-svgrepo-com.svg";
import Linkedin from "../../public/svg/media/linkedin-svgrepo-com.svg";
import ClickSpark from "../components/ClickSpark";
import { Canvas, useFrame } from "@react-three/fiber";
import { Model } from "../components/Model";
import projects from "../projects_simple.json";
import { useRef } from "react";
import * as THREE from "three";
import { MarqueeComponent } from "../components/Marquee";
import BlurText from "../components/BlurText";
import { motion } from "motion/react";

function RotatingModel1() {
  const groupRef = useRef<THREE.Group>(null);
  const width = window.innerWidth;
  let scale = 40;

  console.log(width);

  if (width > 1000) {
    scale = 50;
  } else if (width > 700) {
    scale = 45;
  } else {
    scale = 25;
  }

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {" "}
      {/* hna kberna b moderate */}
      <Model />
    </group>
  );
}

export function HomePage() {
  return (
    <>
      <ClickSpark
        sparkColor="#bb0000"
        sparkSize={20}
        sparkRadius={50}
        sparkCount={6}
        duration={300}
      >
        <div className="bg-black w-full  flex flex-col">
          {/* nav */}
          <div className="border-b border-red-700 w-full h-28 flex items-center justify-center px-4 ">
            <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
              <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                className="flex items-center justify-between "
              >
                <img
              
                  src={Logo}
                  alt="logo"
                  className=" w-48"
                />

                <ul className="flex text-red-700">
                  <li className=" py-4 mx-8 text-base font-semibold border-b border-red-700 hover:text-red-500 hover:border-red-500 max-[502px]:mx-2 max-[502px]:py-2 max-[502px]:text-sm max-[380px]:text-xs max-[362px]:hidden">
                    HOME
                  </li>

                  <li>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => console.log("hover started!")}
                      className="bg-red-700 text-black py-4 px-8 text-base font-semibold hover:bg-red-500 max-[502px]:px-1 max-[502px]:py-2 max-[502px]:text-sm max-[380px]:text-xs "
                    >
                      CONTACT ME
                    </motion.button>
                  </li>
                </ul>
              </motion.nav>
            </div>
          </div>
          {/* hero section */}
          <div
            className={`border-b border-red-700 w-full  flex items-center justify-center   px-4 bg-[url('../public/svg/backGroundSvg.svg')]  `}
          >
            <div className="w-full h-full border-x border-red-700 max-w-[1889px] flex  max-[600px]:flex-col ">
              <div className="bg-whte w-2/4 h-full max-[1250px]:w-auto max-[600px]:w-full   ">
                <div className="bg-red-700 max-[600px]:w-full w-[550px] h-[450px]  max-[1050px]:w-[400px]  max-[786px]:w-[300px]  max-[1050px]:h-[380px] max-[786px]:h-[250px] mt-56 max-[1250px]:mt-16  flex items-end justify-end max-[1052px]:justify-center shadow-[100px_-100px_1000px_-47px_#bb0000] max-[1250px]:w-[450px]  ">
                  <motion.img
                  initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1,ease:"easeInOut",delay:0.1}}
                    src={Me}
                    alt="me"
                    className="max-[1050px]:w-3/4 max-[600px]:w-60"
                  />
                </div>
                <div className=" mt-10 select-none ">
                  <motion.h1 initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1,ease:"easeOut",delay:0.1}} className="text-5xl font-extrabold text-red-700 border-b-8 border-red-700 w-12 ">
                    ٠١
                  </motion.h1>
                </div>
              </div>

              <div className="bg-whte w-2/4 h-full  max-[1250px]:w-3/4  max-[1250px]:pl-12 max-[600px]:w-full mb-10 max-[600px]:pl-0 ">
                <div className=" w-full h-52  text-7xl text-left pt-10  ">
                  <motion.h2 initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{duration:1,ease:"easeInOut",delay:0.1}}
                    className="select-none
                     uppercase text-red-700 font-medium max-[850px]:text-4xl max-[600px]:w-full  max-[600px]:text-end max-[600px]:-ml-10"
                  >
                    zouhair
                  </motion.h2>
                  <motion.h2 initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{duration:1,ease:"easeInOut",delay:0.2}}
                    className="select-none
                  text-red-700 font-light  font-reem mb-1  max-[600px]:w-full  max-[600px]:text-end"
                  >
                    {" "}
                    قحطل
                  </motion.h2>
                  <motion.h5 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,ease:"easeInOut",delay:0.2}} className="text-sm text-red-700  uppercase flex items-center ">
                    <img src={Arrow} className="w-5 " alt="arrow" />
                    A front-end developer
                  </motion.h5>
                </div>
                <div className=" w-full  mt-20 max-[1250px]:mt-4 max-[600px]:mt-0">
                 
              <BlurText
                text="Transforming"
                delay={150}
                animateBy="letters"
                direction="top"
                className="text-red-600 text-8xl uppercase font-extrabold italic max-[1636px]:text-7xl max-[1134px]:text-4xl max-[786px]:text-2xl"
              />
                  <motion.p initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,ease:"easeInOut",delay:0.1}} className="text-red-600 text-4xl uppercase font-extrabold max-[1636px]:text-2xl max-[786px]:text-xl">
                    ideas into clean, fast, and reliable interfaces.{" "}
                  </motion.p>

                  <motion.p initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,ease:"easeInOut",delay:0.3}} className=" text-sm text-red-700  uppercase flex items-start max-[1250px]:text-lg  max-[786px]:text-sm  max-[630px]:text-xs  max-[630px]:uppercase max-[600px]:text-lg">
                    <img
                      src={Arrow}
                      className="w-5 max-[1240px]:mt-1 max-[790px]:hidden max-[600px]:block   "
                      alt="arrow"
                    />
                    I build with React, Tailwind, and smooth animations to
                    deliver a great user experience.
                  </motion.p>

                  <motion.div initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:1,ease:"easeOut",delay:0.1}} className="  flex justify-end items-end  mt-28 select-none max-[1250px]:hidden ">
                    <motion.p className="rotate-90 uppercase text-red-700 text-center  flex items-center  ">
                      scroll dowen
                      <img src={Arrow} className="w-5 " alt="arrow" />
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* div */}
          <div className="border-b border-red-700 w-full h-28 flex items-center justify-center px-4 ">
            <div className="w-full h-full border-x border-red-700 max-w-[1889px] flex items-center justify-center">
              <BlurText
                text="< Let’s bring ideas to life together />"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-red-600 text-5xl uppercase font-extrabold max-[1076px]:text-3xl max-[700px]:text-2xl max-[555px]:text-lg max-[430px]:text-sm max-[340px]:text-xs "
              />
            </div>
          </div>

          {/* about*/}

          <div className="border-b border-red-700 w-full  flex items-center justify-center px-4  flex-col">
            {/*storet */}
            <div className="w-full  border-x border-b border-red-700 max-w-[1889px] h-[800px] max-[768px]:h-[1200px] max-[768px]:flex-col flex">
              <div className="w-2/4 h-full max-[768px]:w-full max-[768px]:h-[600px]">

                <div className="w-full  pl-5  ">
                  <h1 className="text-red-700 text-4xl uppercase mt-16 italic font-bold flex items-center ml-2 font-reem ">
                    قصة{" "}
                    <span className="rotate-90  mt-2">
                      {" "}
                      <img src={Arrow} className="w-10  " alt="arrow" />
                    </span>
                  </h1>

                  <h2
                    className="select-none
                 uppercase text-red-700 font-light text-3xl"
                  >
                    {" "}
                    The story starts
                  </h2>
                  <p className="text-red-700 max-w-[450px] mt-6">
                    when I first explored the world of web design, fascinated by
                    how lines of code could create something interactive and
                    beautiful. It was during my early days in tech that I
                    realized I could combine logic and creativity. But my
                    passion isn’t limited to screens—I also love drawing. With
                    every stroke of a pencil, I find a way to express what words
                    can’t.
                  </p>
                  <p className="text-red-600 text-4xl uppercase font-extrabold mt-10">
                    {" "}
                    Between coding and sketching, I’ve found a balance that
                    keeps me inspired every day.{" "}
                  </p>
                </div>
              </div>
              <div className="w-2/4 h-full   max-[768px]:w-full max-[768px]:h-[600px]">
                <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }}>
                  <ambientLight intensity={0.3} />
                  <directionalLight
                    position={[5, 5, 5]}
                    intensity={1}
                    color="red"
                  />
                  <RotatingModel1 />
                </Canvas>
              </div>
            </div>
            {/*  div skills */}
            <div className="border-b border-red-700 w-full h-28 flex items-center justify-center  ">
              <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
                <MarqueeComponent />
              </div>
            </div>

            {/* project */}
            <div className="w-full  border-x  border-red-700 max-w-[1889px] ">
              <div className="w-full h-[40px] ">
                <h1 className="text-red-500 uppercase">project</h1>
              </div>

              <div className="w-full  ">
                <div className=" w-full  flex flex-col">
                  {projects.map((p, i) => (
                    <div
                      key={i}
                      className=" flex items-center w-full justify-between  border-y border-red-700 "
                    >
                      <div className=" flex items-start  ">
                        <h1 className="text-red-600 text-8xl uppercase font-extrabold italic max-[1650px]:text-5xl max-[920px]:text-3xl ">
                          {p.name}
                        </h1>
                        <div className="flex mt-5 max-[920px]:mt-2 ml-1 max-[650px]:hidden">
                          <span className="text-red-600 ml-1 uppercase border border-red-600 rounded-full p-1 text-xs max-[1024px]:text-[9px] max-[1024px]:p-0 max-[1024px]:px-1 ">
                            {p.is_website ? "website" : "not a website"}
                          </span>
                          <span className="text-red-600  uppercase border border-red-600 rounded-full p-1 text-xs max-[1024px]:text-[9px] max-[1024px]:p-0 max-[1024px]:px-1  ">
                            {p.languages}
                          </span>
                        </div>
                      </div>
                      <button className="text-red-600 text-4xl uppercase font-extrabold mr-5 max-[1024px]:text-2xl max-[920px]:text-sm hover:text-red-800">
                        <a href={p.link} target="_blank">
                          open
                        </a>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* contact btn */}

          <div className="border-b border-red-700 w-full h-48 flex items-center justify-center px-4 ">
            <div className="w-full h-full border-x border-red-700 max-w-[1889px]  flex items-center justify-center">
              <div>
                <img
                  src={Arrow}
                  className="w-15 mr-6 max-[430px]:w-8 "
                  alt="arrow"
                />
              </div>
              <button className="uppercase py-6 px-12 max-[430px]:px-4 max-[430px]:py-3   font-semibold bg-red-600 hover:bg-red-500">
                contact Me!
              </button>
              <div className="rotate-180">
                <img
                  src={Arrow}
                  className="w-15 mr-6 max-[430px]:w-8 "
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          {/* footer */}

          <div className="border-b border-red-700 w-full h-48 flex items-center justify-center px-4 ">
            <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
              <div className=" w-full h-full flex justify-between items-center  ">
                <div className=" flex  items-center   gap-2 ml-5 ">
                  <img
                    className="w-10 max-[530px]:w-8"
                    src={Instagram}
                    alt="instagram"
                  />
                  <img
                    className="w-10 max-[530px]:w-8"
                    src={Github}
                    alt="githube"
                  />
                  <img
                    className="w-10 max-[530px]:w-8"
                    src={Linkedin}
                    alt="Linkedin"
                  />
                </div>
                <div className="h-full w-full  flex items-end  justify-end pb-4 ">
                  <h1 className="text-3xl text-red-800   flex items-center mr-5 max-[400px]:mr-2 font-reem max-[690px]:text-xl max-[530px]:text-sm max-[350px]:text-xs ">
                    © زهير قحطل. جميع الحقوق محفوظة. ٢٠٢٥
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* /// */}
        </div>
      </ClickSpark>
    </>
  );
}
