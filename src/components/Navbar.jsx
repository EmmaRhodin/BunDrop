import { useState } from "react";
import NavLinks from "./NavLinks";
import SideCart from "./SideCart";
import { Link, useNavigate, useLocation } from "react-router-dom";
import burgeroisieLogo2 from "../assets/icons/Burgeroisie-logo2.svg";
import { useCart } from "../context/CartContext";

function Navbar() {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const onRemoveItem = (index) => {
    removeItemFromCart(index);
  };

  const showSideCart = location.pathname !== "/checkout";

  return (
    <>
      <nav className="w-full h-36 bg-indigo-950 justify-between">
        <div className="h-2"></div>
        <div className="relative flex items-center h-28">
          <Link className="absolute left-1/2 transform -translate-x-1/2" to="/">
            <img
              className="w-44 mx-auto drop-shadow-light-dark"
              src={burgeroisieLogo2}
              alt="webicon"
            />
          </Link>
          <button className="ml-auto mr-4 text-orange-300" onClick={toggleCart}>
            Cart
          </button>
        </div>
        <div>
          <NavLinks />
        </div>
      </nav>

      {showSideCart && (
        <SideCart
          isOpen={isCartOpen}
          closeCart={closeCart}
          cartItems={cartItems}
          onRemoveItem={onRemoveItem}
          onIncreaseItemQuantity={increaseItemQuantity} // Pass function to SideCart
          onDecreaseItemQuantity={decreaseItemQuantity} // Pass function to SideCart
        />
      )}
    </>
  );
}

export default Navbar;
