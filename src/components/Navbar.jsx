import { useState } from "react";
import NavLinks from "./NavLinks";
import SideCart from "./SideCart";
import { Link, useNavigate } from "react-router-dom";
import burgeroisieLogo2 from "../assets/icons/Burgeroisie-logo2.svg";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false); // Manage cart state
  const Navigate = useNavigate();

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // Function to close the cart
  const closeCart = () => {
    setIsCartOpen(false);
  };

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
          <button
            className="ml-auto mr-4 text-orange-300"
            onClick={toggleCart} // Toggle cart visibility
          >
            Cart
          </button>
        </div>

        <div className="">
          <NavLinks />
        </div>
      </nav>

      {/* Pass closeCart function to SideCart */}
      <SideCart isOpen={isCartOpen} closeCart={closeCart} />
    </>
  );
}

export default Navbar;
