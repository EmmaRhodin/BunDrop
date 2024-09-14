import AllProducts from "../components/AllProducts";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Menu() {
  const { categoryParam } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const { addItemToCart } = useCart();

  return (
    <div>
      <div className="w-full flex items-center">
        <section
          id="top-products"
          className="flex items-center justify-center w-8/12 mx-auto"
        >
          <AllProducts category={categoryParam} addItemToCart={addItemToCart} />
          {/* Pass category from URL */}
        </section>
      </div>
    </div>
  );
}

export default Menu;
