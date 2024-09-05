import "./App.css";
import { PizzaData } from "./utils/data";
import PizzaMenu from "./components/PizzaMenu";

function App() {
  const pizzas = PizzaData;
  const pizzasLength = pizzas.length;
  return (
    <div className="container pt-50">
      <div className="main-menu">
        {pizzasLength > 0 ? (
          pizzas.map((pizza) => <PizzaMenu pizzaObj={pizza} key={pizza.name} />)
        ) : (
          <p>No Pizzas present</p>
        )}
      </div>
    </div>
  );
}

export default App;
