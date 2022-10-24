import React, { useState } from "react";
import ButtonBar from "./ButtonBar";
import DataList from "./DataList";
import { useEffect } from "react";
import apiRequest from "./ApiRequest";

function App() {

  const API_URL = "http://jsonplaceholder.typicode.com";
  const [data, setData] = useState([]);
  const [resource, setResource] = useState("users");
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {

    const getData = async (url) => {
      const result = await apiRequest(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      return result;
    }

    const url = `${API_URL}/${resource}`;
    (async () => {
      const result = await getData(url)
      if (typeof(result) === "string") {
        setData([]);
        setFetchError(result);
      } else {
        setData(result);
        setFetchError(null);
      }
    })();
    
  }, [resource]);

  return (
    <div className="app">
      <ButtonBar
        currentResource={resource}
        setResource={setResource}
      />
      {fetchError && <p className="error-message">{fetchError}</p>}
      {
        !fetchError && <DataList
          data={data}
        />
      }
    </div>
  );
}

export default App;
