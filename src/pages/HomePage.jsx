import TopProducts from "../components/TopProducts";
import Welcome from "../components/Welcome";
import FeaturedItem from "../components/FeaturedItem";

export async function loader() {
  return "hello from loader";
}

function HomePage() {
  return (
    <div className="">
      <section id="welcome" className="flex items-center justify-center h-full">
        <Welcome />
      </section>
      <section id="featured-item" className="flex items-center w-8/12 mx-auto">
        <FeaturedItem />
      </section>
      <div className="w-full flex items-center">
        <section
          id="top-products"
          className="flex items-center justify-center w-6/12 mx-auto"
        >
          <TopProducts />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
