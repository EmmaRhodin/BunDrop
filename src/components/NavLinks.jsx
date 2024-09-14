import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="w-full flex items-center">
      <a href="#menu"></a>
      <div className="mx-auto">
        <Link
          className="bg-gradient-gold bg-clip-text text-transparent font-bold drop-shadow-light-dark"
          to="/menu/burgers"
        >
          -Burgers-
        </Link>
        <Link
          className="bg-gradient-gold bg-clip-text text-transparent ml-4 font-bold drop-shadow-light-dark"
          to="/menu/sides"
        >
          -Sides-
        </Link>
        <Link
          className="bg-gradient-gold bg-clip-text text-transparent ml-4 font-bold drop-shadow-light-dark"
          to="/menu/drinks"
        >
          -Drinks-
        </Link>
        <Link
          className="bg-gradient-gold bg-clip-text text-transparent ml-4 font-bold drop-shadow-light-dark"
          to="/menu/desserts"
        >
          -Desserts-
        </Link>
        <Link
          className="bg-gradient-gold bg-clip-text text-transparent ml-4 font-bold drop-shadow-light-dark"
          to="/menu/chicken"
        >
          -Chicken-
        </Link>
        <Link
          className="bg-gradient-gold bg-clip-text text-transparent ml-4 font-bold drop-shadow-light-dark"
          to="/menu/vegetarian"
        >
          -Vegetarian-
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
