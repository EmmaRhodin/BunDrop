import MenuCard from "./MenuCard";

export default function TopProducts() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="border border-black p-6">
        <div className="mb-6 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Top Sellers!</h1>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
        <div className="mt-6 flex items-center justify-center">
          <p className="text-2xl font-bold">Browse Our Whole Menu Here!</p>
        </div>
      </div>
    </div>
  );
}
