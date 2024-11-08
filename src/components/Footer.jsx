export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Exclusive Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Slem Store</h6>
          <p className="mb-4">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-white outline-none"
            />
            <button className=" text-black p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.91245 12H4.00045L2.02345 4.13505C2.01079 4.08934 2.00308 4.0424 2.00045 3.99505C1.97845 3.27405 2.77245 2.77405 3.46045 3.10405L22.0004 12L3.46045 20.896C2.78045 21.223 1.99645 20.737 2.00045 20.029C2.00247 19.9658 2.01359 19.9031 2.03345 19.843L3.50045 15"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Support</h6>
          <p className="text-xs mb-2">111 Bijoy Sarani, Dhaka,</p>
          <p className="mb-2 text-sm">DH 1515, Bangladesh</p>
          <p className="mb-2 text-sm">exclusive@gmail.com</p>
          <p className="mb-2 text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Account</h6>
          <a className="block mb-2 text-sm hover:text-gray-400" href="#">
            My Account
          </a>
          <a className="block mb-2 text-sm hover:text-gray-400" href="#">
            Login / Register
          </a>
          <a className="block mb-2 text-sm hover:text-gray-400" href="#">
            Cart
          </a>
          <a className="block mb-2 text-sm hover:text-gray-400" href="#">
            Wishlist
          </a>
          <a className="block mb-2 text-sm hover:text-gray-400" href="#">
            Shop
          </a>
        </div>

        {/* Quick Link Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Quick Link</h6>
          <a className="block mb-2 text-sm hover:text-gray-400" href="#">
            Privacy Policy
          </a>
          <a className="block mb-2 text-sm hover:text-gray-400" href="#">
            Terms Of Use
          </a>
          <a className="block mb-2 text-sm hover:text-gray-400" href="#">
            FAQ
          </a>
          <a className="block mb-2 text-sm hover:text-gray-400" href="#">
            Contact
          </a>
        </div>

        {/* Download App Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Download App</h6>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex gap-2 mb-6">
            <div className="bg-gray-700 w-24 h-12"></div>
            <div className="bg-gray-700 w-24 h-12"></div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm">
          &copy; Copyright Rimel 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
}
