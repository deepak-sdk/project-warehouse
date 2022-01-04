import React, { useEffect, useState } from "react";
import AppContext from "./app-context";

const AppState = (props) => {
  const [warehouse, setWarehouse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const onLoad = () => {
  //   // console.log("fn")
  //   // async function AllData() {
  //   //   const response = await fetch(
  //   //     "https://616d506937f997001745d992.mockapi.io/warehouse"
  //   //   );
  //   //   const data = await response.json();
  //   //   setWarehouse(data);

  //   // }
  //   // AllData();

  // };

  // localStorage.setItem(warehouse, JSON.stringify(warehouse))
  // var storedData = JSON.parse(localStorage.getItem(warehouse))

  useEffect(() => {
    // onLoad();

    fetch(`https://616d506937f997001745d992.mockapi.io/warehouse`)
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
        }
        // console.log(response)
        return response.json();
      })
      .then((actualData) => {
        setWarehouse(actualData);
        // console.log(actualData);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setWarehouse([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  return (
    <AppContext.Provider
      value={{
        warehouse: warehouse,
        error: error,
        loading: loading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
