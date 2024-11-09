import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import View1 from '../assets/view1.jpg'
import View2 from '../assets/view2.jpg'
import View3 from '../assets/view3.jpg'
import View4 from '../assets/view4.jpg'
import View5 from '../assets/view5.jpg'
import StarRating from '../components/StarRating'
import CarDelivery from '../assets/car-delivery.svg'
import EyeView from '../assets/icon-eye.svg'
import Return from '../assets/Icon-return.svg'
import SectionHeader from '../components/SectionHeader'
import Item1 from '../assets/related-item1.jpg'
import Item2 from '../assets/related-item2.jpg'
import Item3 from '../assets/related-item3.jpg'
import Item4 from '../assets/related-item4.jpg'

const relatedItems = [
    { image: Item4, label: 'HAVIT HV-G92 Gamepad',oldPrice: '150', price:'100',discount:'40',reviews:'88'},
    { image: Item2, label: 'AK-900 Wired Keyboard',oldPrice: '450',price:'380',discount:'35',reviews:'48'},
    { image: Item3, label: 'IPS LCD Gaming Monitor', oldPrice: '200',price:'150',discount:'30',reviews:'58'},
    { image: Item1, label: 'RGB liquid CPU Cooler', oldPrice: '250',price:'200',reviews:'78'},
 

  ];

export default function ProductDetails() {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/account/${id}`);
      }
    const [count,setCount] = useState(0);
    const {id} = useParams();
    const itemData = {
        0: { id: 1, name: 'Havic HV G-92 Gamepad', description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',category:'Gaming',price:'192' },
        1: { id: 2, name: 'Havic HV G-92 Gamepad', description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',category:'Gaming',price:'192' },
        2: { id: 3, name: 'Havic HV G-92 Gamepad', description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',category:'Gaming',price:'192' },
        3: { id: 4, name: 'Havic HV G-92 Gamepad', description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',category:'Gaming',price:'192' },
        4: { id: 5, name: 'Havic HV G-92 Gamepad', description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',category:'Gaming',price:'192' },
        5: { id: 6, name: 'Havic HV G-92 Gamepad', description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',category:'Gaming',price:'192' },
        6: { id: 7, name: 'Havic HV G-92 Gamepad', description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',category:'Gaming',price:'192' },
        7: { id: 8, name: 'Havic HV G-92 Gamepad', description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',category:'Gaming',price:'192' },
      };
     
const itemId = Number(id); 

const item = itemData[itemId];
const [rating, setRating] = useState(0);

   const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
      if (!item) {
        return <div>Item not found</div>;
      }
  return (
    <div className="py-6 bg-white px-6 lg:px-12">
         <div className="mb-4 text-sm text-gray-500 mr-4 flex gap-4">
        <span>Account</span> / <span >{item.category}</span> / <span className="font-bold ">{item.name}</span>
      </div>
      <div className='flex flex-wrap md:flex-nowrap gap-8 w-full  mt-8 md:mt-[80px]'>
<div className='w-full md:w-[20%] flex flex-col gap-4   items-center justify-center hidden md:block'>
<div className='w-full flex items-center justify-center p-6 border rounded bg-[#ffff]'><img src={View5} alt="product image view" /></div>
<div className='w-full flex items-center justify-center p-6 border rounded bg-[#ffff]'><img src={View4}  alt="product image view" /></div>
<div className=' w-full flex items-center justify-center p-6 border rounded bg-[#ffff]'><img src={View3}  alt="product image view" /></div>
<div className='w-full flex items-center justify-center p-6 border rounded bg-[#ffff]'><img src={View2} alt="product image view" /></div>
</div>
<div className='w-full md:w-[80%] flex flex-col md:flex-row gap-12'>
    <div className='w-full md:w-[50%] '>
        <div className='p-6 items-center justify-center flex h-full border rounded bg-[#ffff] '>
            <img src={View1} alt="product image view" />
        </div>
    </div>
    <div className='w-full md:w-[40%] h-auto'>
        <div>
            <h1 className='font-bold text-xl tracking-widest'>{item.name}</h1>
            <div className='flex gap-3 items-center mt-4'>
            <StarRating rating={rating} onChange={handleRatingChange} /> <span>(150 Reviews)</span> | <span className='text-md font-medium text-[#00FF66]'>In Stock</span>
            </div>
            <p className='font-medium text-xl tracking-wider mt-4'>${parseFloat(item.price).toFixed(2)}</p>
            <p className='mt-8 font-normal border-b border-black pb-6'>{item.description}</p>
            <div className='flex flex-col'>
                <p className='text-lg my-4 font-normal tracking-wider'>Colors: </p>
                <div className='flex items-center  gap-4'><p className='text-lg my-4 font-normal tracking-wider'>Size:</p> <div className='flex gap-3'>

                <button className='h-8 w-8 border border-black rounded'>XS</button> 
                <button className='h-8 w-8 border border-black rounded'>S</button> 
                <button className='h-8 w-8 border border-black rounded bg-[#DB4444] text-white'>M</button> 
                <button className='h-8 w-8 border border-black rounded'>L</button> 
                <button className='h-8 w-8 border border-black rounded'>XL</button> 
                </div>
                </div>
                <div className='flex gap-4 mb-8 mt-2'>
                    <div className='grid grid-cols-4 border w-24 h-8 rounded place-items-center'>
                    <button className='bg-[#DB4444] w-full h-full rounded-l text-lg'>-</button><span className='col-span-2 text-xl'>{count}</span><button className='bg-[#DB4444] w-full h-full rounded-r text-lg text-white'>+</button>
                    </div>
                
                <button className='w-24 h-8 bg-[#DB4444] rounded text-white text-md'>Buy Now</button>
                <div>  <button className="w-8 h-8 border rounded border-black flex items-center justify-center">
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
        </button></div>
                </div>
               
            </div>
            <div className='flex flex-col'>
                <div>
                    <div className='flex items-center border border-black rounded-t-md gap-6 p-4'>
                    <div><img src={CarDelivery} alt="" /></div>
<div >
    <h3 className='font-medium text-md '>Free Delivery</h3>
    <p className='font-normal text-sm mt-2 underline cursor-pointer'>Enter your postal code for Delivery Availability</p>
</div>
                    </div>

                </div>
                <div>
                    <div className='flex items-center border border-black rounded-b-md gap-6 p-4'>
                    <div><img src={Return} alt="" /></div>
<div >
    <h3>Return Delivery</h3>
    <p>Free 30 Days Delivery Returns. Details</p>
</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
      </div>
      <div className='mt-[80px] mb-[60px]'>
        <SectionHeader   title={"Related Items"}/>
        <div className='flex flex-col md:flex-row gap-6'>

       

{relatedItems.map((item, index) => (
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
   {item.tag &&  <div className="badge bg-[#DB4444] text-white absolute top-4 left-4 rounded-md px-3 h-8 "><button>-{item.discount}%</button></div>}
  
  </figure>
 
  
   
   

</div>
   <div className='absolute top-2 right-4 rounded-full border bg-white h-8 w-8 flex items-center justify-center'>  <img 
   src={EyeView} alt='view icon'/></div>
 
  
   <div className='flex flex-col mt-4'>
   <p className='text-md font-medium'>{item.label}</p>
   <div className='flex flex-col  gap-2 mt-2'>
   <p className='text-[#DB4444]'>${item.price} <span className='line-through ml-3 text-gray-300'>${item.oldPrice}</span></p>
   <div className='flex items-center '><StarRating rating={rating} onChange={handleRatingChange} /> <span className='ml-2'>({item.reviews})</span></div>
   </div>

  </div>
  </div>
  </>
 
 ))}
        </div>
      </div>
    </div>
  )
}
