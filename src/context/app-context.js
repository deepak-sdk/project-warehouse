import React from "react";

const AppContext = React.createContext({
  warehouse: [],
  loading: false,
  error: null,
});

export default AppContext;
