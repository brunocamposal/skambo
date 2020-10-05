import React from 'react';
import { Form } from 'semantic-ui-react';

interface Props {
  required?: boolean;
  name: string;
  type?: string;
  label: string;
  inputPlace?: string;
  inputRef?: any;
  error?: {
    message?: string;
  };
  multiple?: boolean;
  step?: number | string;
  min?: number;
  max?: number;
}

const FormField = ({
  required,
  name,
  type,
  label,
  inputPlace,
  inputRef,
  error,
  multiple,
  step,
  min,
  max,
}: Props) => {
  return (
    <Form.Field required={required}>
      <label>
        <div>{label}</div>
        <input
          name={name}
          type={type}
          placeholder={inputPlace}
          ref={inputRef}
          multiple={multiple}
          step={step}
          min={min}
          max={max}
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </Form.Field>
  );
};

export default FormField;
