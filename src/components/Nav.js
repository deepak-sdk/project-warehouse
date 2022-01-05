import React from "react";
import { useHistory } from "react-router";
import Button from "../UI/Button";
import "./Nav.css";

export function Nav() {
  const history = useHistory();
  return (
    <div className="nav-bar">
      <div className="nav-bar-title">
        <p onClick={() => history.push("/")}>Warehouse</p>
        <Button  onClick={() => history.push('/add-warehouse')}>Add Warehouse</Button>
      </div>
    </div>
  );
}
