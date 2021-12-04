import { Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { WareHouseList } from "./components/WareHouseList";
import { WareHouse } from "./set-two-components/WareHouse";
import { Warehousetable } from "./set-two-components/warehousetable";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* set-1
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
      </Switch> */}

      {/* {set-2} */}
      <Nav />
      <div className="react-table">
        <Switch>
          <Route exact path="/">
            <Warehousetable />
          </Route>
          <Route path="/:id">
            <WareHouse />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
