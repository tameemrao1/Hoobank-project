import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`hover:scale-105 transition-all duration-300 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
