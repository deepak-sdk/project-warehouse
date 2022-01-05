import React from "react";
import { Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./App.css";
import { WareHouseData } from "./components/WareHouseData";
import { EditPage } from "./components/EditPage";
import { AddPage } from "./components/AddPage";

import AppState from "./context/AppState";

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

      <AppState>
        <Nav />
        <Switch>
          <Route exact path="/">
            <div className="react-table">
              <WareHouseData />
            </div>
          </Route>

          <Route path="/edit/:id">
            <EditPage />
          </Route>

          <Route path="/add-warehouse">
            <AddPage />
          </Route>
        </Switch>
      </AppState>
    </div>
  );
}

export default App;
