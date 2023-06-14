import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";

import { fetchData } from "./api/api";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    fetchDataAsync();
  }, []);

  return (
    <>
      <Table data={data} />
    </>
  );
}

export default App;
