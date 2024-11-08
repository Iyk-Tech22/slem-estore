import { useEffect, useState } from "react";
import Item1 from "../assets/item1.jpg";
import Item2 from "../assets/item2.jpg";
import Item3 from "../assets/item3.jpg";
import Item4 from "../assets/item4.jpg";

const slides = [
  {
    image: Item1,
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
  },
  { image: Item2, title: "Summer Sale", subtitle: "Discounts on Clothing" },
  { image: Item3, title: "Home Essentials", subtitle: "Up to 15% off" },
  { image: Item4, title: "New Gadgets", subtitle: "Latest Arrivals" },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8">
            <h3 className="text-white text-xl lg:text-2xl font-semibold">
              {slide.title}
            </h3>
            <p className="text-white text-lg lg:text-xl mb-4">
              {slide.subtitle}
            </p>
            <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
              Shop Now →
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-red-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
