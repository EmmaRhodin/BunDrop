import AllProducts from "../components/AllProducts";

function Menu() {
  return (
    <div>
      <div className="w-full flex items-center">
        <section
          id="top-products"
          className="flex items-center justify-center w-8/12 mx-auto"
        >
          <AllProducts />
        </section>
      </div>
    </div>
  );
}

export default Menu;
