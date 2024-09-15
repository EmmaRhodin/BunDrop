import TopProducts from "../components/TopProducts";
import Welcome from "../components/Welcome";
import FeaturedItem from "../components/FeaturedItem";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export async function loader() {
  return "hello from loader";
}

function HomePage() {
  const { addItemToCart } = useCart();
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <section id="welcome" className="flex items-center justify-center h-full">
        <Welcome />
      </section>
      <section id="featured-item" className="flex items-center w-8/12 mx-auto">
        <FeaturedItem />
      </section>
      <div className="w-full flex items-center">
        <section
          id="top-products"
          className="flex items-center justify-center w-8/12 mx-auto"
        >
          <TopProducts addItemToCart={addItemToCart} />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
