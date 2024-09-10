import featuredBurger from "../assets/pictures/FeaturedBurger.svg";

export default function FeaturedItem() {
  return (
    <div className="relative text-white p-6 flex items-center justify-center">
      <div className="relative">
        <img
          src={featuredBurger}
          className="w-full h-auto"
          alt="Featured Burger"
        />
        <div className="absolute inset-0 flex flex-col justify-center text-center w-5/12">
          <h1 className="text-5xl font-bold ml-8 mb-10">
            Grilloutine Beef Burger
          </h1>
          <p className="text-2xl font-bold ml-8 mb-4">
            Back By Popular Demand!
          </p>
          <p className="text-lg font-bold ml-8">
            Two 150g Premium Beef Patties Grilled To Perfection. Nestled Between
            Crisp Lettuce, Juicy Tomatoes, Cheese & Toasted Buns Slathered In
            Our Special Patriotic Sauce!
          </p>
        </div>
      </div>
    </div>
  );
}
