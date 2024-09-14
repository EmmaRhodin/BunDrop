import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideCart({
  isOpen,
  closeCart,
  cartItems,
  onRemoveItem,
}) {
  const [isCartOpen, setIsCartOpen] = useState(isOpen);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Effect to handle cart opening based on `isOpen` and `cartItems`
  useEffect(() => {
    if (cartItems.length > 0 && !isCartOpen) {
      setIsCartOpen(true);
    }
  }, [cartItems, isCartOpen]);

  // Effect to synchronize local state with `isOpen` prop
  useEffect(() => {
    setIsCartOpen(isOpen);
  }, [isOpen]);

  const handleCloseCart = () => {
    setIsCartOpen(false);
    closeCart(); // Notify parent to close the cart
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout", { state: { cartItems, totalPrice } }); // Navigate to /checkout with state
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out w-52 border-l-2 border-r-2 drop-shadow-light-dark border-amber-500 bg-white h-full shadow-lg`}
    >
      <div className="flex flex-col items-center border-b bg-indigo-950 border-amber-500 text-center">
        <div className="p-2 mt-1 text-right border-b-2 border-amber-500 w-full">
          <button
            className="bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark"
            onClick={handleCloseCart}
          >
            {"Minimize >>"}
          </button>
        </div>
        <div className="p-2 border-b-2 border-amber-500 w-full text-center">
          <h2 className="text-4xl bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark">
            Shopping Cart
          </h2>
        </div>
      </div>

      {/* Container with limited height and overflow */}
      <div
        className="p-2 text-black overflow-y-auto h-64 pr-2"
        style={{ direction: "ltr" }}
      >
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index} className="mb-2 flex items-center ml-3 mt-3">
                <span className="flex-1">
                  {item.title} - ${item.price.toFixed(2)} x {item.quantity}
                </span>
                <button
                  className="text-red-500 ml-4"
                  onClick={() => onRemoveItem(index)}
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <li className="mb-2 flex items-center ml-3 mt-3">
              Your cart is empty
            </li>
          )}
        </ul>
      </div>

      <div className="p-2 text-right border-t-2 border-amber-500">
        <div className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</div>
      </div>

      <div className="p-4 flex items-center">
        <div className="p-2 border-2 border-amber-500 bg-indigo-950 w-full">
          <button
            className={`text-2xl w-full text-center bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark ${
              cartItems.length === 0 ? "opacity-100 cursor-not-allowed" : ""
            }`}
            onClick={handleCheckout}
            disabled={cartItems.length === 0} // Disable button when cart is empty
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
