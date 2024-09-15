// SideCart.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideCart({
  isOpen,
  closeCart,
  cartItems,
  onRemoveItem,
  onIncreaseItemQuantity,
  onDecreaseItemQuantity,
}) {
  const [isCartOpen, setIsCartOpen] = useState(isOpen);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (cartItems.length > 0 && !isCartOpen) {
      setIsCartOpen(true);
    }
  }, [cartItems, isCartOpen]);

  useEffect(() => {
    setIsCartOpen(isOpen);
  }, [isOpen]);

  const handleCloseCart = () => {
    setIsCartOpen(false);
    closeCart();
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout", { state: { cartItems, totalPrice } });
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

      <div className="p-2 text-black overflow-y-auto h-64 pr-2">
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index} className="mb-2 flex-col ml-3 mt-3">
                <span className="flex-1">
                  {item.title} - ${item.price.toFixed(2)}
                </span>
                <div className="flex items-center ml-4">
                  <button
                    className="text-blue-500 ml-2"
                    onClick={() => onDecreaseItemQuantity(index)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="text-blue-500 ml-2"
                    onClick={() => onIncreaseItemQuantity(index)}
                  >
                    +
                  </button>
                </div>
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
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
