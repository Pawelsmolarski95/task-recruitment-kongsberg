import React from "react";

interface ShowRowValueProps {
  selectedRow: any;
}

const ShowRowValue: React.FC<ShowRowValueProps> = ({
  selectedRow,
}) => {
  return (
    <>
      {selectedRow && (
        <div className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 mb-16">
          <div>
            <div className="px-6 py-3">
            <div className="flex items-center">
                <b>ID:</b> {selectedRow.id}
              </div>
            </div>
            <div className="px-6 py-3">
              <div className="flex items-center">
                <b>Author:</b>{" "}
                {selectedRow.volumeInfo.authors.join(", ")}
              </div>
            </div>
            <div className="px-6 py-3">
              <div className="flex items-center">
                <b>Title:</b> {selectedRow.volumeInfo.title}
              </div>
            </div>
            <div className="px-6 py-3">
              <div className="flex items-center">
                <b>Page Count: </b>{selectedRow.volumeInfo.pageCount}
              </div>
            </div>
            <div className="px-6 py-3">
              <div className="flex items-center">
                <b>Categories: </b> {selectedRow.volumeInfo.categories}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowRowValue;
