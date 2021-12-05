import React from "react";
import { Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./App.css";
import { WareHouseData } from "./components/WareHouseData";
import { EditPage } from "./components/EditPage";

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

      <Nav />
      <div className="react-table">
        <AppState>
          <Switch>
            <Route exact path="/">
              <WareHouseData />
            </Route>
            <Route path="/:id">
              <EditPage/>
            </Route>
          </Switch>
        </AppState>
      </div>
    </div>
  );
}

export default App;
