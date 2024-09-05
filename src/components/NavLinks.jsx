import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="capitalize hidden text-white md:grow md:flex md:justify-end md:visible md:text-[18px] md:gap-7 lg:gap-10 lg:text-[22px]  xl:text-[27px] xl:gap-20 font-bold">
      <a href="#menu"></a>
      <Link to="/menu">Menu</Link>
      <Link to="/basket">Basket</Link>
    </div>
  );
}

export default NavLinks;
