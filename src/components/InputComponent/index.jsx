// InputComponent.jsx
import React from "react";

const InputComponent = ({
    type = "text",
    label = "Enter value",
    name,
    value,
    onChange,
    placeholder = " ",
    required = false,
    className = "",
    labelClassName = "",
    inputClassName = "",
}) => {
    return (
        <div className={`relative w-full ${className}`}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`peer w-full border-2 border-gray-300 bg-transparent shadow-[inset_0_0_0_1000px_white] text-gray-700 px-6 py-2 rounded-lg text-[15px] outline-none transition duration-100  focus:border-blue-600 valid:border-blue-600 ${inputClassName}`}
            />
            {label && (
                <label
                    htmlFor={name}
                    className={` absolute left-6 -top-1 text-gray-500 text-[15px] bg-white px-2 transition-all duration-200 transform scale-100 translate-y-2 peer-focus:scale-90 peer-valid:scale-90 peer-valid:-translate-y-4 peer-focus:-translate-y-4 peer-focus:-translate-x-4 peer-valid:-translate-x-4  peer-focus:text-gray-500 peer-focus:font-normal peer-focus:text-[14px] peer-valid:font-normal peer-valid:text-[14px] pointer-events-none z-30 ${labelClassName}`}
                >
                    {label}
                </label>
            )}
        </div>

    );

};

export default InputComponent;

