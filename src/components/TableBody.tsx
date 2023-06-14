import React from "react";

interface VolumeInfo {
  authors: string[];
  title: string;
}

interface DataItem {
  id: string;
  volumeInfo: VolumeInfo;
  kind: string;
}

interface TableBodyProps {
  data: DataItem[];
  onRowClick: (row: DataItem) => void;
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
              {item.volumeInfo.authors.join(", ")}
            </td>
            <td className="px-6 py-4">
              {item.volumeInfo.title}
            </td>
            <td className="px-6 py-4">{item.kind}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
