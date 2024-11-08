function CartItem({ image, name, price, quantity }) {
  const subtotal = price * quantity;

  return (
    <div className="grid grid-cols-4 gap-4 py-2 font-semibold items-center text-left">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 object-cover rounded"
        />
        <div>{name}</div>
      </div>
      <div className="text-center text-black">${price}</div>
      <input
        type="number"
        defaultValue={quantity}
        className="w-16 border border-gray-300 rounded text-black text-center bg-white h-8"
      />
      <div className="text-center">${subtotal}</div>
    </div>
  );
}
export default CartItem;
