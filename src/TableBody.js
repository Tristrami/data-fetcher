import React from "react";
import Row from "./Row";

const TableBody = ({ data }) => {
  return(
    <tbody>
      {data.map((object) => {
          return (
            <Row
              key={object.id}
              object={object}
            />
          )
      })}
    </tbody>
  )
};

export default TableBody;
