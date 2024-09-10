import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="w-full bg-indigo-950 flex items-center">
      <a href="#menu"></a>
      <div className="mx-auto">
        <Link className="text-orange-300 mr-4 font-bold" to="/menu">
          -Menu-
        </Link>
        <Link className="text-orange-300 ml-4 font-bold" to="/basket">
          -Basket-
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
