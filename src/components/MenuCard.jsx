import { useState } from "react";
import burgeroisielogo2 from "../assets/icons/Burgeroisie-logo2.svg";

export default function MenuCard({
  id,
  title,
  image,
  price,
  description,
  onAddToCart,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative border border-amber-500 drop-shadow-light-dark bg-white group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden relative">
        <img
          className={`bg-center bg-no-repeat bg-cover w-full h-44 transition-opacity duration-300 ${
            isHovered ? "opacity-50" : "opacity-100"
          }`}
          src={image || burgeroisielogo2}
          alt={title}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-100 transition-opacity duration-300 p-4">
            <p className="text-center mb-4">{description}</p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                console.log("Add to cart clicked", { id, title, price });
                onAddToCart({ id, title, price });
              }}
            >
              Add Item
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-black font-medium text-lg mb-1">{title}</h3>
        <h3 className="text-black font-medium text-xl">{price}</h3>
      </div>
    </div>
  );
}
