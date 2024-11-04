import CategoryCarousel from "./CategoryCarousel";
import ArrowRight from '../assets/arrow-right.svg';
import ArrowLeft from '../assets/arrow-left.svg';
import { useState } from "react";
export default function Category() {
    const [currentSlide, setCurrentSlide] = useState(1); // Track the current slide
    const totalSlides = 6;
    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
      };
    
      const goToBackSlide = () => {
        setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
      };


  return (
    <div className="px-6  lg:p-12 flex flex-col mt-12">
        
        <div className="flex gap-4 items-center mb-6">
            <div className="h-6 border bg-red-500 w-4 rounded"></div>
            <h3 className="text-red-500 text-sm font-bold">Categories</h3>
        </div>
        <div className="flex  justify-between mb-6 items-center">
            <h1 className="text-xl font-bold ">Browse By Category</h1>
            <div className="flex gap-2">
                <div  className="rounded-full w-8 h-8 border bg-gray-300 flex items-center justify-center" onClick={goToBackSlide}><img src={ArrowLeft} className="w-4"/></div>
                <div  className="rounded-full w-8 h-8 border bg-gray-300 flex items-center justify-center" onClick={goToNextSlide}><img src={ArrowRight}  className="w-4"/></div>
            </div>
        </div>
        <div>
            <CategoryCarousel currentSlide={currentSlide}/>
        </div>
    </div>
  )
}
