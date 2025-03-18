import React from "react";

const Button = ({ children, className, ...props }) => (
  <button className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300 ease-in-out ${className}`} {...props}>
    {children}
  </button>
);

export default Button;