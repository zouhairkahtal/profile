import Logo from "../../public/svg/Logo.min.svg"

export function HomePage() {
  return (
    <>
      <div className="bg-black w-full  flex flex-col">
        {/* nav */}
        <div className="border-b border-red-700 w-full h-28 flex items-center justify-center px-4 ">
          <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
            <nav className='flex items-center justify-between '>

<img src={Logo} alt="logo" className=" w-48" />

<ul className="flex text-red-700">

<li className=" py-4 mx-8 text-base font-semibold border-b border-red-700">
    HOME
</li>
<li className=" py-4 mx-8 text-base font-semibold">
    PROJECT 
</li>
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
        <div className="border-b border-red-700 w-full h-[800px] flex items-center justify-center px-4 ">
          <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
            <h1 className="text-red-500">hero section</h1>
          </div>
        </div>
        {/* div */}
        <div className="border-b border-red-700 w-full h-28 flex items-center justify-center px-4 ">
          <div className="w-full h-full border-x border-red-700 max-w-[1889px]">
            <h1 className="text-red-500">div</h1>
          </div>
        </div>

        {/* about*/}

        <div className="border-b border-red-700 w-full  flex items-center justify-center px-4  flex-col">
          {/* about storet */}
          <div className="w-full  border-x border-b border-red-700 max-w-[1889px] h-[800px]">
            <h1 className="text-red-500">about storey</h1>
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
