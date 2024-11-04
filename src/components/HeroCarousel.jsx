import { useEffect, useState } from "react";
import Item1 from '../assets/item1.jpg'
import Item2 from '../assets/item2.jpg'
import Item3 from '../assets/item3.jpg'
import Item4 from '../assets/item4.jpg'

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(1); // Track the current slide
      // Function to handle automatic slide change
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === 4 ? 1 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);
  return (
    <>

    
<div className="relative w-full">
      <div className="carousel w-full" >
        <div id="item1" className={`carousel-item relative w-full  ${currentSlide === 1 ? 'block' : 'hidden'}`}>
          <img
            src={Item1}
            className="w-full h-72"
            alt="Slide 1"
          />
        </div>
        <div id="item2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
          <img
            src={Item2}
            className="w-full h-72"
            alt="Slide 2"
          />
        </div>
        <div id="item3" className={`carousel-item relative w-full  ${currentSlide === 3 ? 'block' : 'hidden'}`}>
          <img
            src={Item3}
            className="w-full h-72"
            alt="Slide 3"
          />
        </div>
        <div id="item4" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
          <img
            src={Item4}
            className="w-full h-72"
            alt="Slide 4"
          />
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 gap-3 flex -translate-y-1/2 transform justify-center">
        <div  className={`h-3 w-3 cursor-pointer rounded-full ${currentSlide === 1 ? 'bg-[#DB4444] border-2 border-white' : 'bg-gray-400'}`} onClick={() => setCurrentSlide(1)}></div>
        <div className={`h-3 w-3 cursor-pointer rounded-full ${currentSlide === 2 ? 'bg-[#DB4444] border-2 border-white' : 'bg-gray-400'}`} onClick={() => setCurrentSlide(2)}></div>
        <div className={`h-3 w-3 cursor-pointer rounded-full ${currentSlide === 3 ? 'bg-[#DB4444] border-2 border-white' : 'bg-gray-400'}`} onClick={() => setCurrentSlide(3)}></div>
        <div className={`h-3 w-3  cursor-pointer rounded-full ${currentSlide === 4 ? 'bg-[#DB4444] border-2 border-white' : 'bg-gray-400'}`} onClick={() => setCurrentSlide(4)}></div>
      </div>
    </div>
 


    {/* <div className="carousel w-full ">
    <div id="item1" className="carousel-item w-full ">
      <img
        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        className="w-full" />
    </div>
    <div id="item2" className="carousel-item w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
        className="w-full" />
    </div>
    <div id="item3" className="carousel-item w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
        className="w-full" />
    </div>
    <div id="item4" className="carousel-item w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        className="w-full" />
    </div>
  </div>
  <div className="flex w-full justify-center gap-2 py-2">
    <a href="#item1" className="btn btn-xs">1</a>
    <a href="#item2" className="btn btn-xs">2</a>
    <a href="#item3" className="btn btn-xs">3</a>
    <a href="#item4" className="btn btn-xs">4</a>
  </div> */}
  </>
  )
}
