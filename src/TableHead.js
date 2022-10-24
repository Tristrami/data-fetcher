import React from "react";
import Cell from "./Cell";

const TableHead = ({ columnNames }) => {
  return (
    <thead>
      <tr>
        {columnNames.map((columnName, index) => {
          return(
            <Cell
              key={index}
              cellData={columnName}
              tdClassName="column-name"
            />
          )
        })}
      </tr>
    </thead>
  )
};

export default TableHead;
