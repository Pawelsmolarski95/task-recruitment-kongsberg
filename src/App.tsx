import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";

import { fetchData } from "./api/api";
import ShowRowValue from "./components/ShowRowValue";

interface VolumeInfo {
  authors: string[];
  title: string;
}

interface DataItem {
  id: string;
  volumeInfo: VolumeInfo;
  kind: string;
}

function App() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] =
    useState<DataItem | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchDataAsync();
  }, []);

  return (
    <>
      <ShowRowValue selectedRow={selectedRow} />
      <Table
        data={data}
        onRowClick={setSelectedRow}
        selectedRow={selectedRow}
      />
    </>
  );
}

export default App;
