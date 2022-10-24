import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <TableHead
          columnNames={data && data.length !== 0 ? Object.keys(data[0]) : []}
        />
        <TableBody
          data={data}
        />
      </table>
    </div>   
  )
}

export default Table;