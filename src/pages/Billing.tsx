import React from "react";

function Billing() {
  return (
    <div className="p-8 bg-white px-6 lg:px-12">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-gray-500">
        <span>Account</span> / <span>My Account</span> / <span>Product</span> /{" "}
        <span>View Cart</span> / <span className="font-bold">CheckOut</span>
      </div>

      <div className="flex justify-center gap-24">
        {/* Billing Details Form */}
        <div className="w-[470]">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                First Name<span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2  bg-gray-50" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Company Name
              </label>
              <input type="text" className="w-full p-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Street Address<span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 bg-gray-50" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Apartment, floor, etc. (optional)
              </label>
              <input type="text" className="w-full p-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Town/City<span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 bg-gray-50" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input type="tel" className="w-full p-2 bg-gray-50" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input type="email" className="w-full p-2 bg-gray-50" required />
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="border border-black p-4 ">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="w-12 h-12 object-cover mr-4"
              />
              <div>
                <p className="font-semibold">LCD Monitor</p>
                <p className="text-gray-500">$650</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="w-12 h-12 object-cover  mr-4"
              />
              <div>
                <p className="font-semibold">H1 Gamepad</p>
                <p className="text-gray-500">$1100</p>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between py-2 border-t border-black">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between py-2 border-t border-black font-semibold">
              <span>Total:</span>
              <span>$1750</span>
            </div>

            {/* Payment Method */}
            <div className="mt-4">
              <label className="flex items-center mb-2">
                <input type="radio" name="payment" className="mr-2" />
                <span>Bank</span>
                <img
                  src="https://via.placeholder.com/50"
                  alt="Bank Icons"
                  className="ml-2 h-4"
                />
              </label>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                <span>Cash on delivery</span>
              </label>
            </div>

            {/* Coupon Code */}
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 p-2 border border-black bg-white"
              />
              <button className="px-4 py-2 bg-red-500 text-white hover:bg-red-600">
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <button className="w-full mt-4 px-4 py-2 bg-red-500 text-white hover:bg-red-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
