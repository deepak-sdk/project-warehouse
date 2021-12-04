import React, { useEffect, useState } from "react";
import { API_URL } from "../MOCK_API";
import { WareHouseListTable } from "./WareHouseListTable";
import { SearchFilter } from "./SearchFilter";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export function WareHouseList() {
  const [allData, setAllData] = useState([]);
  const [q, setQ] = useState([]);

  function search(rows) {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
        row.city.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
        row.type.toLowerCase().indexOf(q.toLowerCase()) > -1
    );
  }

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((json) => setAllData(json));
  }, []);

  return (
    <div className="warehouse-list">
      <SearchFilter q={q} setQ={setQ} />

      <div className="warehouse-list-table">
        <WareHouseListTable data={search(allData)} />
      </div>
    </div>
  );
}

// npm add es6-promise
// npm isomorphic fetch
