import { NavLink } from "react-router-dom";

function CartSummary({ subtotal, shipping, total }) {
  return (
    <div className="w-full sm:w-1/3 border border-black p-4">
      <div className="flex justify-between py-2">
        <span className="text-black">Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between py-2 border-t border-gray-200">
        <span className="text-black">Shipping:</span>
        <span>{shipping}</span>
      </div>
      <div className="flex justify-between py-2 border-t border-gray-200 font-semibold">
        <span className="text-black">Total:</span>
        <span>${total}</span>
      </div>
      <button className="w-full mt-4 px-4 py-2 bg-red-500 text-white hover:bg-red-600">
        <NavLink to={"/billing"}>Proceed to checkout</NavLink>
      </button>
    </div>
  );
}

export default CartSummary;
