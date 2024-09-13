import MenuCard from "./MenuCard";

export default function AllProducts() {
  return (
    <div className="flex min-h-screen items-center">
      <div className="border-2 bg-white border-amber-500 p-6 drop-shadow-light-dark">
        <div className="mb-6 flex items-center justify-center">
          <h1 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent drop-shadow-light-dark">
            All Products!
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </div>
  );
}
