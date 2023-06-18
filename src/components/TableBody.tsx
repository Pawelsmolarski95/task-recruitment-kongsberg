import React from "react";
import { Book } from "../types/types";

interface TableBodyProps {
  data: Book[];
  onRowClick: (row: Book) => void;
  selectedRow?: any;
}

const TableBody: React.FC<TableBodyProps> = ({
  data,
  onRowClick,
  selectedRow,
}) => {
  return (
    <>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            onClick={() => onRowClick(item)}
            className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${
              selectedRow?.id === item.id
                ? "bg-yellow-200"
                : " "
            }`}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.id}
            </th>
            <td className="px-6 py-4">
              {item.volumeInfo.authors}
            </td>
            <td className="px-6 py-4">
              {item.volumeInfo.categories}
            </td>
            <td className="px-6 py-4">
              {item.volumeInfo.title}
            </td>
            <td className="px-6 py-4 max-w-[40%] overflow-auto">
              {item.volumeInfo.description}
            </td>
            <td className="px-6 py-4">
              {item.volumeInfo.pageCount}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
