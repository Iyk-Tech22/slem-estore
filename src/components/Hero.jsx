import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <div className="hero px-6  lg:px-12">
  <div className="hero-content flex-col lg:flex-row w-full justify-start items-start p-0 gap-0  ">
    <div className="border-r-2 pr-6 w-[25%] h-80 pt-12  hidden lg:block">
    <ul
    
        >
        <li className="my-3 "><a>Electronics</a></li>
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li className="my-3"><a>Home & LifeStyle</a></li>
        <li className="my-3"><a>Medicine</a></li>
        <li className="my-3"><a>Sports & Outdoors</a></li>

        <li className="my-3"><a>Baby&apos;s & Toys</a></li>
        <li className="my-3"><a>Grogeries & Pets</a></li>
        <li className="my-3"><a>Health & Beauty</a></li>
      </ul>
    </div>
    <div className="pt-12 lg:pl-12 relative grow">
    <HeroCarousel/>
    </div>
  </div>
</div>
  )
}
