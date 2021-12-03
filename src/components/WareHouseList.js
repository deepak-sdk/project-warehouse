import React, { useEffect, useState } from "react";
import { API_URL } from "../MOCK_API";
import { WareHouseListTable } from "./WareHouseListTable";

export function WareHouseList() {
  const [allData, setAllData] = useState([]);

  const getData = () => {
    async function AllWareHouse() {
      const data = await fetch(`${API_URL}`);
      const allData = await data.json();
      setAllData(allData);
    }
    AllWareHouse();
  };
  useEffect(getData, []);

  return (
    <div className="warehouse-list">
      <div className="warehouse-list-table">
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Type</th>
            <th>City</th>
            <th>Space Available</th>
            <th>Cluster</th>
            <th>Registered</th>
            <th>Live</th>
          </tr>

          {allData.map(
            ({
              id,
              name,
              code,
              type,
              city,
              cluster,
              is_live,
              is_registered,
              space_available,
            }) => (
              <tr>
                <WareHouseListTable
                  key={id}
                  id={id}
                  name={name}
                  code={code}
                  type={type}
                  city={city}
                  cluster={cluster}
                  space={space_available}
                  live={is_live}
                  registered={is_registered}
                />
              </tr>
            )
          )}
        </table>
      </div>
    </div>
  );
}
