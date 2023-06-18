import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";

import { fetchData } from "./api/api";
import ShowRowValue from "./components/ShowRowValue";
import { Book } from "./types/types";
import PageHeader from "./components/PageHeader";

const App = () => {
  const [data, setData] = useState<Book[]>([]);
  const [selectedRow, setSelectedRow] = useState<Book | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const fetchedData = await fetchData();

      const mappedData = fetchedData.map((book) => ({
        id: book.id,
        volumeInfo: {
          authors: book.author ? [book.author] : [],
          title: book.title,
          description: book.description,
          categories: typeof book.categories === 'string' ? [book.categories] : book.categories,
          pageCount: book.pageCount,
        },
      }));

      setData(mappedData);
    };

    fetchDataAsync();
  }, []);

  return (
    <>
      <PageHeader>Recruitment task Kongsberg</PageHeader>
      <ShowRowValue selectedRow={selectedRow} />
      <Table
        data={data}
        onRowClick={setSelectedRow}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default App;
