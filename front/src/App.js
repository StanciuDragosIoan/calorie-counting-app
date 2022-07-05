import "./App.css";

import { MealItemsProvider } from "./services/MealsService.service";
import { MainCard } from "./components/MainCard/MainCard";

function App() {
  return (
    <div className="App">
      <MealItemsProvider>
        <MainCard />
      </MealItemsProvider>
    </div>
  );
}

export default App;
