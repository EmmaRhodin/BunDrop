import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
