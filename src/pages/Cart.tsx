import React from "react";
import CartSummary from "../components/CartSummary";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = [
    {
      image: "https://via.placeholder.com/50",
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
    },
    {
      image: "https://via.placeholder.com/50",
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = "Free";
  const total = subtotal; // Modify this if you have additional fees

  return (
    <div className="p-16 bg-white px-6 lg:px-12">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-gray-500">
        <span>Home</span> / <span className="font-bold">Cart</span>
      </div>

      {/* Cart Table */}
      <div>
        <div className="grid grid-cols-4 gap-4 py-2 font-semibold text-left text-black">
          <div>Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-center">Subtotal</div>
        </div>

        {/* Cart Items */}
        {cartItems.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}

        {/* Cart Buttons */}
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 border border-black hover:bg-gray-50 text-black">
            Return To Shop
          </button>
          <button className="px-4 py-2 border border-black hover:bg-gray-50 text-black">
            Update Cart
          </button>
        </div>
      </div>

      {/* Coupon Code & Cart Total */}
      <div className="flex flex-wrap justify-between items-start mt-8 gap-32">
        {/* Coupon Code */}
        <div className="flex-1">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 p-2 border border-gray-300 bg-white"
            />
            <button className="px-4 py-2 bg-red-500 text-white hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Total */}
        <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
      </div>
    </div>
  );
}

export default Cart;
