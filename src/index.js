import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { coffeeData } from "./coffeeData";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Our Coffee Menu</h1>
    </header>
  );
}

function Menu() {
  const coffees = coffeeData;
  // const coffees = [];
  const numCoffees = coffees.length;

  return (
    <main className="menu">
      {numCoffees > 0 ? (
        <>
          <p>
            Ditch the snooze. Grab a rich cup to kickstart your amazing day.
          </p>
          <ul className="coffees">
            {coffees.map((coffee) => (
              <Coffee coffeeObj={coffee} key={coffee.name} />
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}

function Coffee({ coffeeObj }) {
  // if (coffeeObj.soldOut) return null;

  return (
    <li className={`coffee ${coffeeObj.soldOut ? "sold-out" : ""}`}>
      <img src={coffeeObj.photoName} alt="missing" />
      <div>
        <h3>{coffeeObj.name}</h3>
        <p>{coffeeObj.desc}</p>
        <span>{coffeeObj.soldOut ? "SOLD OUT" : coffeeObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00 come visit us</p>
      <button onClick={() => alert("DOESNT DO ANYTHING")} className="btn">
        Order Coffee
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
