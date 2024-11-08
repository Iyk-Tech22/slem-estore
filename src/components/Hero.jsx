import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <div className="hero px-6 lg:px-12 py-6 bg-white ">
      <div className="hero-content flex-col lg:flex-row w-full justify-start items-start p-0 gap-6">
        {/* Sidebar Categories */}
        <div className="border-r-2 pr-8 w-[20%] h-[350px] pt-8 hidden lg:block">
          <ul className="space-y-4 text-gray-700">
            {[
              "Women's Fashion",
              "Men's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby's & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((category, index) => (
              <li
                key={index}
                className="flex items-center justify-between cursor-pointer hover:text-red-500 transition"
              >
                <span>{category}</span>
                {index < 2 && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                      fill="black"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Carousel Section */}
        <div className="grow relative">
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}
