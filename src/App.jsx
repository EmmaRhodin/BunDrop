import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="horizontal-container">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F3%2FFancy-Hat-PNG-Free-Download.png&f=1&nofb=1&ipt=f6c92ff51c58cd50b1a20742086dd498e5e8ac0adf16cc8971543a85ec790cb5&ipo=images"
            className="logo"
          />
          <h1 className="header-start">Burger-</h1>
          <h1 className="header-ending">oisie</h1>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F3%2FFancy-Hat-PNG-Free-Download.png&f=1&nofb=1&ipt=f6c92ff51c58cd50b1a20742086dd498e5e8ac0adf16cc8971543a85ec790cb5&ipo=images"
            className="reverse-logo"
          />
        </div>
      </div>
      <div>
        <navigator className="horizontal-container">
          <a className="navigator-button">
            <h3>Meal</h3>
          </a>
          <a className="navigator-button">
            <h3>Burgers</h3>
          </a>
          <a className="navigator-button">
            <h3>Sides</h3>
          </a>
          <a className="navigator-button">
            <h3>Chicken</h3>
          </a>
          <a className="navigator-button">
            <h3>Vegetarian</h3>
          </a>
          <a className="navigator-button">
            <h3>Desserts</h3>
          </a>
        </navigator>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>HELLO WORLD!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">TEST TEST !!! TEST TEST</p>
    </>
  );
}

export default App;
