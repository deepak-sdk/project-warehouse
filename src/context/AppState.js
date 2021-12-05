import React, { useEffect, useState } from "react";
import AppContext from "./app-context";


const AppState = (props) => {
  const [warehouse, setWarehouse] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://616d506937f997001745d992.mockapi.io/warehouse")
      .then((response) => response.json())
      .then((json) => setWarehouse(json));
  }, []);

 

  return (
    <AppContext.Provider value={[warehouse, setWarehouse, loading,setLoading]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
