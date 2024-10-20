import React from "react";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
}) => (
  <div className='mb-[20px] text-left'>
    <label htmlFor={name} className='text-[0.9rem] font-bold text-[#333] block'>
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='w-full p-[12px] mt-[8px] text-[1rem] border-none rounded-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]'
      required
    />
    {error && <p className='text-red-500'>{error}</p>}
  </div>
);

export default InputField;
