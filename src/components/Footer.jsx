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
              className="w-full px-3 py-2 text-black outline-none"
            />
            <button className="bg-white text-black p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Support</h6>
          <p className="mb-2">111 Bijoy Sarani, Dhaka,</p>
          <p className="mb-2">DH 1515, Bangladesh</p>
          <p className="mb-2">exclusive@gmail.com</p>
          <p className="mb-2">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Account</h6>
          <a className="block mb-2 hover:text-gray-400" href="#">
            My Account
          </a>
          <a className="block mb-2 hover:text-gray-400" href="#">
            Login / Register
          </a>
          <a className="block mb-2 hover:text-gray-400" href="#">
            Cart
          </a>
          <a className="block mb-2 hover:text-gray-400" href="#">
            Wishlist
          </a>
          <a className="block mb-2 hover:text-gray-400" href="#">
            Shop
          </a>
        </div>

        {/* Quick Link Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Quick Link</h6>
          <a className="block mb-2 hover:text-gray-400" href="#">
            Privacy Policy
          </a>
          <a className="block mb-2 hover:text-gray-400" href="#">
            Terms Of Use
          </a>
          <a className="block mb-2 hover:text-gray-400" href="#">
            FAQ
          </a>
          <a className="block mb-2 hover:text-gray-400" href="#">
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
