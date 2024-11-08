import Item1 from '../assets/product1.jpg'
import Item2 from '../assets/product2.jpg'
import Item3 from '../assets/product3.png'
import Item4 from '../assets/product4.jpg'
import Item5 from '../assets/product5.jpg'
import Item6 from '../assets/product6.jpg'
import Item7 from '../assets/product7.png'
import Item8 from '../assets/product8.jpg'
import EyeView from '../assets/icon-eye.svg'
import Star from '../assets/star.svg'

const items = [
    { image: Item1, label: 'Breed Dry Dog Food',rating: Star },
    { image: Item2, label: 'CANON EOS DSLR Camera',rating: Star},
    { image: Item3, label: 'ASUS FHD Gaming Laptop', rating: Star},
    { image: Item4, label: 'Curology Product Set', rating: Star},
    { image: Item5, label: 'Kids Electric Car', tag: true, rating: Star},
    { image: Item6, label: 'Jr. Zoom Soccer Cleats', rating: Star },
    {image: Item7, label:'Quilted Satin Jacket', tag: true, rating: Star},
    {image: Item8, label:'GP11 Shooter USB Gamepad', rating: Star}

  ];
export default function ProductCarousel({currentSlide}) {
    const totalSlides = items.length;

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
             <div className='flex flex-col w-full md:w-[23%] h-auto md:h-[70]'>

            
           <div key={index} className="card relative group hover:shadow-lg border-[#f4f4f4] border-2  bg-base-100 w-96 shadow-xl w-[95%] h-auto md:h-64">
           
           <figure className='my-12'>
             <img
               src={item.image}
               alt={item.label} className='object-cover my-6'/>
               
           </figure>
           <div className="card-body p-0">
            <div className='bg-black  rounded-md cursor-pointer h-12 opacity-0 group-hover:opacity-100   text-white w-full  absolute bottom-0 flex justify-center items-center'>
            <h2 className="card-title ">
               Add To Cart
              

             </h2>
            </div>
            
             <div className="badge badge-secondary absolute top-4 left-4">NEW</div>
                {/* <div className='absolute top-2 right-4 rounded-full border bg-white h-8 w-8 flex items-center justify-center'>  <img 
              src={EyeView} alt='view icon'/></div> */}
            
             {/* <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions justify-end">
               <div className="badge badge-outline">Fashion</div>
               <div className="badge badge-outline">Products</div>
             </div> */}
           </div>
           
            
            
           
         </div>
            <div className='absolute top-2 right-4 rounded-full border bg-white h-8 w-8 flex items-center justify-center'>  <img 
            src={EyeView} alt='view icon'/></div>
          
           
            <div>
            <p className='text-md mb-4 mt-6'>{item.label}</p>
           </div>
           </div>
           </>
            // <div
            //   key={index}
            //   className="carousel-item flex-col  w-full  p-2"
            // >
            //   <div className="bg-[#fffff] shadow-md relative p-4 w-full h-52 cursor-pointer flex items-center justify-center border rounded-md" style={{transform: `translateX(-${(currentSlide - 1) * (100 / totalSlides)}%)`}}>
             
            //     <img
            //       src={item.image}
            //       className="rounded-box w-[35%] "
            //       alt={item.label}
            //     />
            
               
            //     <div className='absolute top-2 right-4 rounded-full border bg-white h-8 w-8 flex items-center justify-center'>  <img 
            //   src={EyeView} alt='view icon'/></div>
            
            //   </div>
            //   <div>
            //   <p className='text-md mb-4 mt-6'>{item.label}</p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    );
}
