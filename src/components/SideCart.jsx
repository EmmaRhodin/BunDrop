export default function SideCart({ isOpen, closeCart }) {
  return (
    <div
      className={`fixed top-0 right-0 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out w-52 border-l-2 border-r-2 drop-shadow-light-dark border-amber-500 bg-white h-full shadow-lg`}
    >
      {/* Header / Title of the Cart */}
      <div className="flex flex-col items-center border-b bg-indigo-950 border-amber-500 text-center">
        {/* Minimize button aligned to the right */}
        <div className="p-2 mt-1 text-right border-b-2 border-amber-500 w-full">
          <button
            className="bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark"
            onClick={closeCart}
          >
            {"Minimize >>"}
          </button>
        </div>

        {/* Centered Cart heading */}
        <div className="p-2 border-b-2 border-amber-500 w-full text-center">
          <h2 className="text-4xl bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark">
            Shopping Cart
          </h2>
        </div>
      </div>

      {/* Cart Items or Content */}
      <div className="p-2 text-black">
        <ul>
          <li className="mb-2 flex items-center ml-3 mt-3">1</li>
          <li className="mb-2 flex items-center ml-3 mt-6">2</li>
          <li className="mb-2 flex items-center ml-3 mt-6">3</li>
        </ul>
      </div>
      <div className="p-4 flex items-center">
        <div className="p-2 border-2 border-amber-500 bg-indigo-950 w-full">
          <button className="text-2xl w-full text-center bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
