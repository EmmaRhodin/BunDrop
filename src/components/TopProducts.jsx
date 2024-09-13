import MenuCard from "./MenuCard";

export default function TopProducts() {
  return (
    <div className="flex min-h-screen items-center">
      <div className="border-2 border-amber-500 p-6 bg-white drop-shadow-light-dark">
        <div className="mb-6 flex items-center justify-center">
          <h1 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark">
            Top Sellers!
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <div className="border-2 border-amber-500 p-6 ml-3 flex flex-col bg-white items-center drop-shadow-light-dark">
        <h1 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark">
          Menu
        </h1>
        <div className="border border-amber-500 w-24 h-24 mt-4 text-center drop-shadow-light-dark bg-white">
          Burgers
        </div>
        <div className="border border-amber-500 w-24 h-24 mt-3 text-center drop-shadow-light-dark bg-white">
          Sides
        </div>
        <div className="border border-amber-500 w-24 h-24 mt-3 text-center drop-shadow-light-dark bg-white">
          Drinks
        </div>
        <div className="border border-amber-500 w-24 h-24 mt-3 text-center drop-shadow-light-dark bg-white">
          Desserts
        </div>
      </div>
    </div>
  );
}
