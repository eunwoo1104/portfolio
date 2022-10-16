import React from "react";

interface TagProps {
  name: string;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ name, className = "" }) => (
  <div
    className={`text-neutral-300 font-normal flex flex-row outline outline-0 rounded text-xl bg-[#2C2F33] space-x-0.5 p-1${
      className ? " " + className : ""
    }`}
  >
    <p>#</p>
    <p>{name}</p>
  </div>
);
