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
      <div className="flex flex-col md:flex-row  justify-between items-start md:items-center mb-[30px] md:mb-[60px]">
        <h1 className="text-[24px] md:text-[36px] font-semibold whitespace-nowrap flex-grow text-black">
          {heading}
        </h1>

        {/* Navigation Buttons */}
        {rightComponent}
      </div>
    </div>
  );
};

export default SectionHeader;
