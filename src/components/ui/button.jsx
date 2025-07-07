// src/components/ui/button.jsx
import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full"
      {...props}
    >
      {children}
    </button>
  );
};
