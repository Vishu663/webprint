import { ChangeEvent, ReactElement } from 'react';

export interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

export default function TextField({
  name = '',
  value = '',
  placeholder = 'Enter',
  handleChange,
  type = 'text',
  required = false,
}: InputProps): ReactElement {
  return (
    <div className='input-field'>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
