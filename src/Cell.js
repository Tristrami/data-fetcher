import React from "react";

const Cell = ({ cellData, tdClassName }) => {
  return(
    <td className={tdClassName}>
      {cellData.startsWith("\"") && cellData.endsWith("\"")
        ? cellData.substring(1, cellData.length - 1)
        : cellData}
    </td>
  );
};

export default Cell;
