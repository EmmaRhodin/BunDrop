import burgeroisielogo2 from "../assets/icons/Burgeroisie-logo2.svg";

export default function MenuCard() {
  return (
    <div className="border">
      <div className="flex flex-col">
        <img
          className="bg-center bg-no-repeat bg-cover w-64 h-44"
          src={burgeroisielogo2}
        />
      </div>
      <div className="flex items-center w-full">
        <h3 className="text-black font-medium">Food-Item</h3>
      </div>
    </div>
  );
}
