import React, { useContext } from "react";
import AppContext from "../context/app-context";
import { useParams, useHistory } from "react-router";

import "./EditPage.css";

export const EditPage = () => {
  const history = useHistory();
  const [warehouse] = useContext(AppContext);
  const { id } = useParams();
  console.log(id);
  const Data = warehouse[id];
  console.log(Data);

  // const [title, setTitle] = useState();

  return (
    <div className="editpage--container">
      <div className="warehouse-data--heading">
        <h3>Edit Data</h3>
      </div>
      <div className="warehouse-data--details">
        <input value="name" type="text" name="name" />
        <input value="code" type="text" name="code" />
        <input value="city" type="text" name="city" />
        <input value="space" type="text" name="space" />
        <input value="type" type="text" name="type" />
        <input value="cluster" type="text" name="cluster" />
      </div>
      <div className="warehouse-data--button">
        <button>Save</button>
        <button onClick={() => history.goBack()}>Back</button>
      </div>
    </div>
  );
};
