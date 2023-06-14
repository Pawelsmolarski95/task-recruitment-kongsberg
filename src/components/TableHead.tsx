const TableHead = () => {
  return (
    <>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            <div className="flex items-center">Author</div>
          </th>
          <th scope="col" className="px-6 py-3">
            <div className="flex items-center">Title</div>
          </th>
          <th scope="col" className="px-6 py-3">
            <div className="flex items-center">Kind</div>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
