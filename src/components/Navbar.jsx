import NavLinks from "./NavLinks";
import { Link, useNavigate } from "react-router-dom";
import burgeroisieLogo2 from "../assets/icons/Burgeroisie-logo2.svg";

function Navbar() {
  const Navigate = useNavigate();
  return (
    <>
      <nav className="w-full h-36 bg-indigo-950 justify-between">
        <div className="h-2"></div>
        <Link className="" to="/">
          <img className="w-44 mx-auto" src={burgeroisieLogo2} alt="webicon" />
        </Link>
        <div className="">
          <NavLinks />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
