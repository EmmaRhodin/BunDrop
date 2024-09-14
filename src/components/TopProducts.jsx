import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";

export default function TopProducts({ addItemToCart }) {
  // Accept addItemToCart as a prop
  const [popularItems, setPopularItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((response) => response.json())
      .then((data) => {
        const popularMenuItems = data.filter((item) => item.isPopular);
        setPopularItems(popularMenuItems);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex min-h-screen items-center mb-20">
      {/* Left section with popular items */}
      <div className="border-2 border-amber-500 p-6 bg-white drop-shadow-light-dark">
        <div className="mb-6 flex items-center justify-center">
          <h1 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark">
            Top Sellers!
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {popularItems.length > 0 ? ( // Use popularItems instead of products
            popularItems.map((product) => (
              <MenuCard
                key={product.id}
                {...product}
                isSelected={selectedItemId === product.id}
                onSelect={() => handleSelect(product.id)}
                onAddToCart={addItemToCart}
              />
            ))
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>

      {/* Right section with Menu categories */}
      <div className="border-2 border-amber-500 p-6 ml-3 flex flex-col bg-white items-center drop-shadow-light-dark">
        <h1 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark">
          Menu
        </h1>
        <Link
          to="/menu/burgers"
          className="border border-amber-500 w-24 h-24 mt-4 text-center drop-shadow-light-dark bg-white flex items-center justify-center no-underline"
        >
          Burgers
        </Link>
        <Link
          to="/menu/sides"
          className="border border-amber-500 w-24 h-24 mt-3 text-center drop-shadow-light-dark bg-white flex items-center justify-center no-underline"
        >
          Sides
        </Link>
        <Link
          to="/menu/drinks"
          className="border border-amber-500 w-24 h-24 mt-3 text-center drop-shadow-light-dark bg-white flex items-center justify-center no-underline"
        >
          Drinks
        </Link>
        <Link
          to="/menu/desserts"
          className="border border-amber-500 w-24 h-24 mt-3 text-center drop-shadow-light-dark bg-white flex items-center justify-center no-underline"
        >
          Desserts
        </Link>
      </div>
    </div>
  );
}
