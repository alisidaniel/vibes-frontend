import React from "react";

export const Table = (props) => {
  return (
    <table className="table w-full rounded-lg">
      <thead className="select-none">
        <tr>
          {props.columns.map((text, idx) => (
            <th
              key={idx}
              className="text-_2 text-sm bg-gray-200 font-medium py-2 px-2 text-left"
            >
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{props.items.map(props.renderRow)}</tbody>
    </table>
  );
};
