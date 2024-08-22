import React, { useRef, useState, useEffect } from 'react';

interface RadioButtonGroupProps {
  idPrefix: string;
  label: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  canModify: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  validationMessage?: string;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  idPrefix,
  label,
  options,
  selectedValue,
  canModify,
  onChange,
  required = false,
  validationMessage = 'This field is required',
}) => {
  const radioRefs = useRef<HTMLInputElement[]>([]);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (selectedValue) {
      setIsValid(true);
      radioRefs.current.forEach((radio) => {
        radio.setCustomValidity('');
      });
    }
  }, [selectedValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(true);
    radioRefs.current.forEach((radio) => {
      radio.setCustomValidity(''); // Clear validation messages for all radios
    });
    onChange(event);
  };

  const handleInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    if (!selectedValue && required) {
      radioRefs.current.forEach((radio) => {
        radio.setCustomValidity(validationMessage);
      });
      setIsValid(false);
    }
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <label className="w-full">{label}</label>
      <div className="flex justify-center w-full">
        {options.map((option, index) => (
          <div key={option.value} className="mx-3 hover:scale-125 duration-100">
            <label htmlFor={`${idPrefix}${option.value}`} className="mr-2">
              {option.label}
            </label>
            <input
              ref={(el) => {
                if (el) radioRefs.current[index] = el;
              }}
              id={`${idPrefix}${option.value}`}
              name={idPrefix}
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              disabled={!canModify}
              onChange={handleChange}
              onInvalid={handleInvalid}
              required={required}
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
