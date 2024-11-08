import CategoryCarousel from "./CategoryCarousel";
import ArrowRight from "../assets/arrow-right.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Category() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="px-6 lg:p-12 flex flex-col bg-white">
      {/* Header */}
      <SectionHeader
        title={"Categories"}
        heading={"Browse By Category"}
        rightComponent={
          <div className="flex gap-2">
            <button className="rounded-full w-8 h-8 border bg-gray-300 flex items-center justify-center">
              <img src={ArrowLeft} className="w-4" />
            </button>
            <button className="rounded-full w-8 h-8 border bg-gray-300 flex items-center justify-center">
              <img src={ArrowRight} className="w-4" />
            </button>
          </div>
        }
      />

      {/* Categories Display */}
      <CategoryCarousel
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
}
