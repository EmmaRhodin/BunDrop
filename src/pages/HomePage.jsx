import Navbar from "../components/Navbar";

export async function loader() {
  return "hello from loader";
}

function HomePage() {
  return (
    <div w-full>
      <h1>HOMEPAGE</h1>
    </div>
  );
}

export default HomePage;
