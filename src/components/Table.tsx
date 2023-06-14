import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

interface VolumeInfo {
  authors: string[];
  title: string;
}

interface DataItem {
  id: string;
  volumeInfo: VolumeInfo;
  kind: string;
}

interface TableProps {
  data: DataItem[];
  onRowClick: (row: DataItem) => void;
  selectedRow?: any;
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
