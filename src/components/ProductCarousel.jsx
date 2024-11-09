import Item1 from '../assets/product1.jpg'
import Item2 from '../assets/product2.jpg'
import Item3 from '../assets/product3.png'
import Item4 from '../assets/product4.jpg'
import Item5 from '../assets/product5.jpg'
import Item6 from '../assets/product6.jpg'
import Item7 from '../assets/product7.png'
import Item8 from '../assets/product8.jpg'
import EyeView from '../assets/icon-eye.svg'
import StarRating from './StarRating'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const items = [
    { image: Item1, label: 'Breed Dry Dog Food', price:'100'},
    { image: Item2, label: 'CANON EOS DSLR Camera',price:'380'},
    { image: Item3, label: 'ASUS FHD Gaming Laptop',price:'150'},
    { image: Item4, label: 'Curology Product Set',price:'200'},
    { image: Item5, label: 'Kids Electric Car', tag: 'NEW',price:'300'},
    { image: Item6, label: 'Jr. Zoom Soccer Cleats',price:'400' },
    {image: Item7, label:'Quilted Satin Jacket', tag: 'NEW',price:'160'},
    {image: Item8, label:'GP11 Shooter USB Gamepad',price:'260'}

  ];
export default function ProductCarousel({currentSlide}) {
    const totalSlides = items.length;
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    const handleClick = (id) => {
      navigate(`/account/${id}`);
    }

    // Update rating when a star is clicked
    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
    return (
      <div className="carousel rounded-box w-full overflow-hidden">
        <div
          className="carousel flex  flex-wrap gap-4  transition-transform duration-300"
          style={{
            
            width: `${totalSlides * 100}%`, // Ensures that the inner container takes full width
          }}
        >
          {items.map((item, index) => (
             <>
             <div key={index} className='flex flex-col w-full md:w-[23%] h-auto md:h-[70]'>

            
           <div  className="card cursor-pointer relative group  border-[#f4f4f4] border-2  bg-base-100 w-96  w-[95%] h-auto  md:h-64 items-center justify-center" onClick={()=>handleClick(index)}>
           
           <figure className='my-12 md:my-0'>
             <img
               src={item.image}
               alt={item.label} className='object-cover  w-[90%]'/>
               <div className=''>
               <div className='absolute top-2 right-4 rounded-full border bg-white h-8 w-8 flex items-center justify-center'>  
                  
                  <img 
              src={EyeView} alt='view icon'/></div>
              <div className='absolute top-12 right-4 rounded-full border bg-white h-8 w-8 flex items-center justify-center '>
              <button className=" ">
          <svg
            width="32"
            height="32"
            
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
              </div>
               </div>
               
             
               <div className='bg-black  rounded-md cursor-pointer h-12 opacity-0 group-hover:opacity-100   text-white w-full  absolute bottom-0 flex justify-center items-center'>
            <h2 className="card-title ">
               Add To Cart
              

             </h2>
            </div>
            {item.tag &&  <div className="badge bg-[#00FF66] text-white absolute top-4 left-4 rounded-md px-3 h-8 "><button>{item.tag}</button></div>}
           
           </figure>
          
           
            
            
      
         </div>
            <div className='absolute top-2 right-4 rounded-full border bg-white h-8 w-8 flex items-center justify-center'>  <img 
            src={EyeView} alt='view icon'/></div>
          
           
            <div className='flex flex-col mt-4'>
            <p className='text-md font-medium'>{item.label}</p>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-[#DB4444]'>${item.price}</p>
            <StarRating rating={rating} onChange={handleRatingChange} /> <span>(34)</span>
            </div>
     
           </div>
           </div>
           </>
          
          ))}
          <div className='w-full   flex items-center justify-center'>
            <button className='w-[55%] md:w-[18%] bg-[#DB4444] border h-12 my-6 rounded text-white'>View All Products</button>
          </div>
        </div>
      </div>
    );
}
