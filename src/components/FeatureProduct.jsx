
import SectionHeader from './SectionHeader'
import FeatureItem1 from '../assets/feature-item1.jpg'
import FeatureItem2 from '../assets/feature-item2.jpg'
import FeatureItem3 from '../assets/feature-item3.jpg'
import FeatureItem4 from '../assets/feature-item4.jpg'
import CarDelivery from '../assets/car-delivery.svg'
import CallIcon from '../assets/call-icon.svg'
import AlertIcon from '../assets/alert-icon.svg'
export default function FeatureProduct() {
  return (
    <div className="px-6  lg:p-12 flex flex-col mt-12">
        <SectionHeader   title={"Featured"}/>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-8'>
            <div className='border border-black relative flex rounded'>
                <div className='z-0 self-center '><img src={FeatureItem4} alt="Feature product image" /></div>
                <div className='absolute left-10 bottom-5 d:bottom-44  text-white'>
                    <h2 className='text-xl font-medium'>PlayStation 5</h2>
                    <p className='my-0 md:my-4 w-60'>Black and White version of the PS5 coming out on sale.</p>
                    <p className='text-md underline font-medium  cursor-pointer'>Shop Now</p>
                </div>
            </div>
            <div className='grid   grid-rows-1 mb-8 md:grid-rows-2 grid-flow-col gap-8'>
                <div className='col-span-2 relative'>
                    <div className='w-full'><img src={FeatureItem3} alt="Feature product image"  className='w-full rounded'/></div>
                    <div className='absolute top-20 md:top-44 left-8 text-white'>
                    <h2 className='text-xl font-medium'>Women’s Collections</h2>
                    <p className='w-60 my-0 md:my-4'>Featured woman collections that give you another vibe.</p>
                    <p className='text-md underline font-medium cursor-pointer'>Shop Now</p>
                    </div>
                </div>
                <div className='border hidden md:flex rounded border-black relative items-center justify-center '>
                 <div className='z-0 w-full p-2'><img src={FeatureItem2} alt="Feature product image" className='w-full h-full'/></div>
                 <div className='absolute    bottom-24 left-16 text-white'>
                    <h2 className='text-xl font-medium'>Speakers</h2>
                    <p className='w-30 md:w-60 my-0 md:my-4'>Amazon wireless speakers</p>
                    <p className='text-md underline font-medium cursor-pointer'>Shop Now</p>
                    </div>
                </div>
                <div className='border rounded hidden md:flex border-black relative  items-center justify-center '>
                    <div className='z-0 w-full p-2'><img src={FeatureItem1} alt="Feature product image"  className='w-full h-full'/></div>
                    <div className='absolute   md:bottom-24 md:left-16 text-white'>
                    <h2 className='text-xl font-medium'>Perfume</h2>
                    <p className='w-20 md:w-60 my-0 md:my-4'>GUCCI INTENSE OUD EDP</p>
                    <p className='text-md underline font-medium cursor-pointer'>Shop Now</p>
                    </div>

                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-center items-center gap-16 mb-[30px] mt-[50px] md:mt-[80px]'>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-24 h-24 rounded-full border border-black flex items-center justify-center bg-black'>
                <img src={CarDelivery} alt="car delivery icon" className='bg-[#f5f5f5] p-2 h-14 w-14 rounded-full'/>
                </div>
                <h2 className='font-bold mt-6 mb-2'>FREE AND FAST DELIVERY</h2>
                <p>Free delivery for all orders over $140</p>
           
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-24 h-24 rounded-full border border-black flex items-center justify-center  bg-[#f5f5f5] '>
                <img src={AlertIcon} alt="call icon"className=' bg-black p-2 h-14 w-14 rounded-full' />
                </div>
                <h2 className='font-bold mt-6 mb-2'>24/7 CUSTOMER SERVICE</h2>
                <p>Friendly 24/7 customer support</p>
           
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-24 h-24 rounded-full border border-black flex items-center justify-center bg-[#f5f5f5]'>
                <img src={CallIcon} alt="alert icon" className=' bg-black p-2 h-14 w-14 rounded-full'/>
                </div>
                <h2 className='font-bold mt-6 mb-2'>MONEY BACK GUARANTEE</h2>
                <p>We reurn money within 30 days</p>
           
            </div>
        </div>
    
     
    </div>
  )
}
