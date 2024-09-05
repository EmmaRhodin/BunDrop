import NavLinks from "./NavLinks";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  return (
    <>
      <nav className="w-full h-28 bg-orange-400 flex items-center justify-between pr-[81px] pl-[26px]">
        <Link className="mr-auto" to="/">
          <img className="w-56 lg:w-72 xl:w-full" src="" alt="webicon" />
        </Link>

        <NavLinks />
      </nav>
    </>
  );
}

export default Navbar;
