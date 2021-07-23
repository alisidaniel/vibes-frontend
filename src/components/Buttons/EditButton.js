import React from "react";
import { Edit3 as Edit } from "react-feather";

export default function EditButton(props) {
  return (
    <button
      className="appearance-none bg-transparent inline-flex hover:text-primary tracking-widest text-xs px-3 py-1"
      {...props}
    >
      <Edit size={15} />
      <span>&nbsp; EDIT</span>
    </button>
  );
}
