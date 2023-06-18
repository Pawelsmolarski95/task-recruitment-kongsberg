import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { Book } from "../types/types";

interface TableProps {
  data: Book[];
  onRowClick: (row: Book) => void;
  selectedRow?: Book | null;
}

const Table: React.FC<TableProps> = ({
  data,
  onRowClick,
  selectedRow,
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-[400px] cursor-pointer">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHead />
        <TableBody
          data={data}
          selectedRow={selectedRow}
          onRowClick={onRowClick}
        />
      </table>
    </div>
  );
};

export default Table;
