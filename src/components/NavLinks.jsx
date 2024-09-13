import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="w-full bg-indigo-950 flex items-center">
      <a href="#menu"></a>
      <div className="mx-auto">
        <Link
          className="text-orange-300 mr-4 font-bold drop-shadow-light-dark"
          to="/menu"
        >
          -Menu-
        </Link>
        <Link
          className="text-orange-300 ml-4 font-bold drop-shadow-light-dark"
          to="/Sides"
        >
          -Sides-
        </Link>
        <Link
          className="text-orange-300 ml-4 font-bold drop-shadow-light-dark"
          to="/Drinks"
        >
          -Drinks-
        </Link>
        <Link
          className="text-orange-300 ml-4 font-bold drop-shadow-light-dark"
          to="/Desserts"
        >
          -Desserts-
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
