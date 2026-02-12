import React from 'react'

const TableSkeleton = ({ rows = 10 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <tr key={index} className="animate-pulse">
          {[...Array(9)].map((_, i) => (
            <td key={i} className="px-4 py-4">
              <div
                className="h-2 bg-gray-300 rounded"
                style={{ width: "80%" }}
              ></div>
            </td>
          ))}
        </tr>
      ))}

    </>
  );
};

export default TableSkeleton;