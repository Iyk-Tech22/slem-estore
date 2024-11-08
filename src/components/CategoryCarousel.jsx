import Item1 from "../assets/Category-CellPhone.svg";
import Item2 from "../assets/Category-Computer.svg";
import Item3 from "../assets/Category-SmartWatch.svg";
import Item4 from "../assets/Category-Camera.svg";
import Item5 from "../assets/Category-Headphone.svg";
import Item6 from "../assets/Category-Gamepad.svg";

const items = [
  { image: Item1, label: "Phones" },
  { image: Item2, label: "Computers" },
  { image: Item3, label: "SmartWatch" },
  { image: Item4, label: "Camera" },
  { image: Item5, label: "Headphones" },
  { image: Item6, label: "Gaming" },
];

export default function CategoryCarousel({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="flex gap-4 overflow-hidden justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveCategory(index)}
          className={`flex w-[170px] h-[145px] flex-col items-center justify-center p-4 cursor-pointer border transition-colors duration-300 ${
            activeCategory === index
              ? "bg-red-500 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          <img src={item.image} className="w-10 h-10 mb-4" alt={item.label} />
          <p className="text-md">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
