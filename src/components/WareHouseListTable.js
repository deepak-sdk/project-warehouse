import React from "react";
import { useHistory } from "react-router-dom";

import "./WareHouseListTable.css";

export function WareHouseListTable({
  id,
  name,
  code,
  type,
  city,
  cluster,
  live,
  space,
  registered,
}) {
  const history = useHistory();

  return (
    <>
      <td>{id}</td>
      <td onClick={() => history.push("./" + id)}>{name}</td>
      <td>{code}</td>
      <td>{type}</td>
      <td>{city}</td>
      <td>{space}</td>
      <td>{cluster}</td>
      <td>{registered ? <div className="green-dot"/> : <div className="red-dot"/>}</td>
      <td>{live ? <div className="green-dot"/>: <div className="red-dot"/>}</td>
    </>
  );
}
