import React from "react";
// @ts-ignore
import * as R from "ramda";

export const isStatus = R.includes(R.__, ["Success", "Disable", "Enable"]);

export const StatusBadge = ({ status }) => {
  const classMap = {
    Success: "bg-btn_green text-black",
    Enable: "bg-btn_green text-black",
    Disable: "bg-btn_red text-black",
  };

  return (
    <span
      className={`${classMap[status]} select-none inline-block rounded-lg px-2 py-1 text-sm`}
    >
      {status}
    </span>
  );
};
