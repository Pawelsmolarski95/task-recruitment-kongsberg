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
              ID: {selectedRow.id}
            </div>
            <div className="px-6 py-3">
              <div className="flex items-center">
                Author:{" "}
                {selectedRow.volumeInfo.authors.join(", ")}
              </div>
            </div>
            <div className="px-6 py-3">
              <div className="flex items-center">
                Title: {selectedRow.volumeInfo.title}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {selectedRow && (

        
        <div>
          <p>ID: {selectedRow.id}</p>
          <p>
            Author:{" "}
            {selectedRow.volumeInfo.authors.join(", ")}
          </p>
          <p>Title: {selectedRow.volumeInfo.title}</p>
        </div>
      )} */}
    </>
  );
};

export default ShowRowValue;
