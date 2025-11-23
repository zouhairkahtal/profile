import Logo from "../../public/svg/Logo.min.svg";
import Arrow from "../../public/svg/arrow-right-svg.svg";
import Me from "../assets/homePagePhoto/me.png";

export function HomePage() {
  return (
    <>
      <div className="bg-black w-full  flex flex-col">
        {/* nav */}
        <div className="border-b border-red-700 w-full h-28 flex items-center justify-center px-4 ">
          <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
            <nav className="flex items-center justify-between ">
              <img src={Logo} alt="logo" className=" w-48" />

              <ul className="flex text-red-700">
                <li className=" py-4 mx-8 text-base font-semibold border-b border-red-700">
                  HOME
                </li>
                <li className=" py-4 mx-8 text-base font-semibold">PROJECT</li>
                <li>
                  <button className="bg-red-700 text-black py-4 px-8 text-base font-semibold">
                    CONTACT ME
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* hero section */}
        <div
          className={`border-b border-red-700 w-full h-[800px] flex items-center justify-center px-4 bg-[url('./public/svg/backGroundSvg.svg')] `}
        >
          <div className="w-full h-full border-x border-red-700 max-w-[1889px] flex ">
            <div className="bg-whte w-2/4 h-full  ">
              <h1 className="text-red-500 font-extralight relative uppercase select-none">
                hero section
              </h1>

              <div className="bg-red-700 w-[550px] h-[450px] mt-56 flex items-end justify-end shadow-[100px_-100px_1000px_-47px_#bb0000]  ">
                <img src={Me} alt="me" />
              </div>
              <div className=" mt-10 select-none ">
                <h1 className="text-5xl font-extrabold text-red-700 border-b-8 border-red-700 w-12">
                  01
                </h1>
              </div>
            </div>

            <div className="bg-whte w-2/4 h-full  ">
              <div className=" w-full h-52  text-7xl text-left pt-10">
                <h2 className=" uppercase text-red-700 font-medium">
                  zouhair{" "}
                </h2>
                <h2 className=" uppercase text-red-700 font-light"> kahtal</h2>
                <h5 className="text-sm text-red-700  uppercase flex items-center ">
                  <img src={Arrow} className="w-5 " alt="arrow" />A front-end
                  developer
                </h5>
              </div>
              <div className=" w-full  mt-20">
                <p className="text-red-600 text-8xl uppercase font-extrabold italic">
                  Transforming{" "}
                </p>
                <p className="text-red-600 text-4xl uppercase font-extrabold ">
                  ideas into clean, fast, and reliable interfaces.{" "}
                </p>

                <p className=" text-sm text-red-700  uppercase flex items-center">
                  <img src={Arrow} className="w-5 " alt="arrow" />I build with
                  React, Tailwind, and smooth animations to deliver a great user
                  experience.
                </p>

                <div className="  flex justify-end items-end  mt-24 select-none">
                  <p className="rotate-90 uppercase text-red-700 text-center  flex items-center ">
                    scroll dowen
                    <img src={Arrow} className="w-5 " alt="arrow" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* div */}
        <div className="border-b border-red-700 w-full h-28 flex items-center justify-center px-4 ">
          <div className="w-full h-full border-x border-red-700 max-w-[1889px] flex items-center justify-center">
            <h1 className="text-red-600 text-5xl uppercase font-extrabold  ">
              {"< Let’s bring ideas to life — together />"}
            </h1>
          </div>
        </div>

        {/* about*/}

        <div className="border-b border-red-700 w-full  flex items-center justify-center px-4  flex-col">
          {/*storet */}
          <div className="w-full  border-x border-b border-red-700 max-w-[1889px] h-[800px] flex">
            <div className="w-2/4 h-full ">
              <h1 className="text-red-500 uppercase select-none">storey</h1>

              <h1
              className="text-red-700 text-4xl uppercase mt-16 italic font-bold "
              >
                
                storey </h1>
            </div>
          </div>
          {/*  div skils */}
          <div className="border-b border-red-700 w-full h-28 flex items-center justify-center  ">
            <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
              <h1 className="text-red-500">div skils</h1>
            </div>
          </div>

          {/* about skils */}
          <div className="w-full  border-x  border-red-700 max-w-[1889px] h-[800px]">
            <h1 className="text-red-500">about skils</h1>
          </div>
        </div>

        {/* contact btn */}

        <div className="border-b border-red-700 w-full h-28 flex items-center justify-center px-4 ">
          <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
            <h1 className="text-red-500">contact btn</h1>
          </div>
        </div>
        {/* footer */}

        <div className="border-b border-red-700 w-full h-48 flex items-center justify-center px-4 ">
          <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
            <h1 className="text-red-500">footer</h1>
          </div>
        </div>

        {/* /// */}
      </div>
    </>
  );
}
