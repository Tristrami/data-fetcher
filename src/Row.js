import React from "react";
import Cell from "./Cell";

const Row = ({ object }) => {
  return (
    <tr> 
      {Object.entries(object).map(([key, value]) => {
        return(
          <Cell
            key={key}
            cellData={JSON.stringify(value)}
            tdClassName={null}
          />
        )
      })}
    </tr>
  )
}

export default Row;