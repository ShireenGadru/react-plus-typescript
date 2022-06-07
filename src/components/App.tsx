import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import AppCSS from "./App.module.css";
import PizzaASVG from "../svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";

const App = () => {
  return (
    <>
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
        <PizzaASVG width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
        <Cart />
        </div>
        <ul>
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza}></Pizza>
          ))}
        </ul>
      </div>
      </AppStateProvider>
    </>
  );
};

export default App;
