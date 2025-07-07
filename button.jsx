
import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-yellow-600 text-white px-4 py-2 rounded-xl shadow hover:bg-yellow-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
