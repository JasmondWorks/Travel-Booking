import React from "react";

export default function InputField({
  type = "text",
  legendTitle = "",
  placeholder = "Placeholder...",
  className = "",
  containerClassName = "",
}) {
  return (
    <div className={`relative ${containerClassName}`}>
      {legendTitle && (
        <span className="text-sm absolute top-0 left-2 translate-y-[-50%] px-1 bg-white">
          {legendTitle}
        </span>
      )}
      <input
        className={`border rounded--sm border-neutral-400 p-3 ${className}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
