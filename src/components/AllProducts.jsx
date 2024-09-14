import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import NavLinks from "./NavLinks";
import { useParams } from "react-router-dom";

export default function AllProducts({ category, addItemToCart }) {
  const { categoryParam } = useParams();
  const currentCategory = category || categoryParam || "burgers";
  const [products, setProducts] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((item) => {
          if (["chicken", "vegetarian"].includes(currentCategory)) {
            return item.dietaryCategory === currentCategory;
          }
          return item.category === currentCategory;
        });
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentCategory]);

  return (
    <div className="flex min-h-screen items-top">
      <div className="border-2 mb-20 mt-20 bg-white border-amber-500 p-6 drop-shadow-light-dark">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl h-20 font-bold bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark">
            {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
          </h1>
        </div>
        <div className="mb-4 p-2 border-t-2 border-b-2 border-amber-500">
          <NavLinks />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {products.length > 0 ? (
            products.map((product) => (
              <MenuCard
                key={product.id}
                {...product}
                isSelected={selectedItemId === product.id}
                onSelect={() => setSelectedItemId(product.id)}
                onAddToCart={addItemToCart}
              />
            ))
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>
    </div>
  );
}
