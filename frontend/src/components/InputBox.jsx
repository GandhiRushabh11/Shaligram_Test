import React from "react";

const InputBox = ({ label, placeholder, type, onChange }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        type={type}
        className="w-full px-1 py-2 border border-slate-300 rounded-md"
        onChange={onChange}
      />
    </div>
  );
};
export default InputBox;
