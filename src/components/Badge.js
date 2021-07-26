import React from "react";
// @ts-ignore
import * as R from "ramda";

export const isStatus = R.includes(R.__, [
  "pending",
  "active",
  "success",
  "approved",
  "cleared",
  "closed",
]);

export const StatusBadge = ({ status }) => {
  const classMap = {
    pending: "bg-_7 text-gray-700",
    fulfilled: "bg-_8 text-gray-700",
    active: "bg-_9 text-gray-700",
    received: "bg-_10 text-white",
    closed: "bg-btn_red text-black",
    debit: "bg-red-200 text-black",
    success: "bg-btn_green text-black",
    open: "bg-green-200 text-black",
    approved: "bg-green-500 text-black",
    credit: "bg-green-200 text-black",
    cleared: "bg-green-200 text-black",
    true: "bg-_9 text-gray-700",
    false: "bg-red-200 text-black",
    Ongoing: "bg-green-200 text-black",
  };

  return (
    <span
      className={`${classMap[status]} select-none inline-block rounded-lg px-2 py-1 text-sm`}
    >
      {status}
    </span>
  );
};
