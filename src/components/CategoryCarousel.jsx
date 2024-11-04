
import Item1 from '../assets/Category-CellPhone.svg'
import Item2 from '../assets/Category-Computer.svg'
import Item3 from '../assets/Category-SmartWatch.svg'
import Item4 from '../assets/Category-Camera.svg'
import Item5 from '../assets/Category-Headphone.svg'
import Item6 from '../assets/Category-Gamepad.svg'


const items = [
  { image: Item1, label: 'Phones' },
  { image: Item2, label: 'Computers' },
  { image: Item3, label: 'SmartWatch' },
  { image: Item4, label: 'Camera' },
  { image: Item5, label: 'Headphone' },
  { image: Item6, label: 'Gaming' },
];

// eslint-disable-next-line react/prop-types
export default function CategoryCarousel({ currentSlide }) {
  const totalSlides = items.length;

  return (
    <div className="carousel rounded-box w-full overflow-hidden">
      <div
        className="carousel flex transition-transform duration-300"
        style={{
          
          width: `${totalSlides * 100}%`, // Ensures that the inner container takes full width
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item  w-full md:w-[20%] p-2"
          >
            <div className="bg-gray-50 w-full hover:bg-red-500 cursor-pointer flex flex-col items-center justify-center border rounded-box" style={{transform: `translateX(-${(currentSlide - 1) * (100 / totalSlides)}%)`}}>
              <img
                src={item.image}
                className="rounded-box w-full"
                alt={item.label}
              />
              <p className='text-md mb-4'>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
