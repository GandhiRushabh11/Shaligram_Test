import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 px-5 me-2 mb-2"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
