import ClickSpark from "../components/ClickSpark";
import DrawingGrid from "../components/DrawingGrid";
import { useState, useEffect } from 'react';

export function Drawingpage() {


  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      const fadeStart = 50; 
      const fadeEnd = 1000;
      let newOpacity = 1;

      if (scrollTop > fadeStart) {
        newOpacity = 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        newOpacity = Math.max(0, Math.min(1, newOpacity));
      }

      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ClickSpark>
        <div>

        <div className="w-full  " style={{ opacity }}>
          <div className="w-full flex items-center justify-center"     >
            <div className="bg-gray-950 w-full max-w-[1500px] h-48 rounded-b-[40px] flex flex-col items-center justify-center">
              <h1 className="text-white text-5xl uppercase font-medium mb-4  max-[1636px]:text-2xl max-[786px]:text-xl">
                fjozf fnreoif fioerjeji
              </h1>
              <p
                className="text-white max-w-[500px] text-center
                "
                >
                ookdkdk kkdklkojfozjeo fjezjfp ejzpfjzepfj pezjfpzjfjp oezjfjez
                pjfpezjpfjpezjfp
              </p>
            </div>
          </div>

          <div className=" w-full bg-gray-950 h-[640px] flex items-center justify-center overflow-hidden mt-24 p-3 ">
           <DrawingGrid/>
          </div>
        
                  </div>

<div className="mt-20 w-full h-[800px] bg-red-200">


</div>

        </div>
      </ClickSpark>
    </>
  );
}
