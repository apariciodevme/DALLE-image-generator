import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900 "
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="px-2 py-1 text-xs font-semibold text-black bg-gray-200 rounded-lg"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm outline-none bg-gray-50 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
      />
    </div>
  );
};

export default FormField;
