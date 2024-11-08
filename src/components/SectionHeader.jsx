import React from "react";

const SectionHeader = ({
  iconColor = "bg-red-500",
  titleColor = "text-red-500",
  title,
  heading,
  rightComponent,
}) => {
  return (
    <div>
      {/* Icon and Section Title */}
      <div className="flex gap-4 items-center mb-6">
        <div className={`h-6 border w-4 rounded ${iconColor}`}></div>
        <h3 className={`${titleColor} text-sm font-bold`}>{title}</h3>
      </div>

      {/* Title and Navigation */}
      <div className="flex justify-between items-center mb-[60px]">
        <h1 className="text-[36px] font-semibold whitespace-nowrap flex-grow text-black">
          {heading}
        </h1>

        {/* Navigation Buttons */}
        {rightComponent}
      </div>
    </div>
  );
};

export default SectionHeader;
