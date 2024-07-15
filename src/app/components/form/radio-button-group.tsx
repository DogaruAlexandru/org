import React from 'react';

interface RadioButtonGroupProps {
  idPrefix: string;
  label: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  canModify: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  idPrefix,
  label,
  options,
  selectedValue,
  canModify,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <label className="w-full">{label}</label>
      <div className="flex justify-center w-full">
        {options.map((option) => (
          <div key={option.value} className="mx-3 hover:scale-125 duration-100">
            <label htmlFor={`${idPrefix}${option.value}`} className="mr-2">
              {option.label}
            </label>
            <input
              id={`${idPrefix}${option.value}`}
              name={idPrefix}
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              disabled={!canModify}
              onChange={onChange}
              className="border-my_dark text-accent rounded-md w-6 h-6 shadow-sm 
              focus:outline-none focus:border-accent focus:ring focus:ring-accent"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
