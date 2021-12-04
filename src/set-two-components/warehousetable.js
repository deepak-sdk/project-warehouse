import React, { useState, useEffect } from "react";
import { API_URL } from "../MOCK_API";

import { SearchFilter } from "./SearchFilter";
import { Warehousedata } from "./warehousedata";

export function Warehousetable() {
  const [warehouse, setWarehouse] = useState([]);
  const [q, setQ] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((json) => setWarehouse(json));
  }, []);
  // console.log(warehouse)

    
    //Search by name,code, city, type, cluster
  function search(rows) {
    return rows.filter(
      (val) =>
        val.name.toLowerCase().indexOf(q) > -1 ||
        val.code.toLowerCase().indexOf(q) > -1 ||
        val.city.toLowerCase().indexOf(q) > -1 ||
        val.type.toLowerCase().indexOf(q) > -1 ||
        val.cluster.toLowerCase().indexOf(q) > -1
    );
  }

  return (
    <>
      <SearchFilter q={q} setQ={setQ} />
      <Warehousedata warehouse={search(warehouse)} />
    </>
  );
}
