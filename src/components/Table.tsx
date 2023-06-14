import React from 'react';

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
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Title</th>
          <th>Kind</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.volumeInfo.authors.join(', ')}</td>
            <td>{item.volumeInfo.title}</td>
            <td>{item.kind}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
