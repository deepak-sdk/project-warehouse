import { Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { WareHouseList } from "./components/WareHouseList";
import { WareHouse } from "./components/WareHouse";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <WareHouseList />
        </Route>
        <Route path="/:id">
         <WareHouse/>
        </Route>
        <Route path="**">
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
