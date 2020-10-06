import React from "react";
import { Form } from "semantic-ui-react";

interface Props {
  required?: boolean;
  name: string;
  type?: string;
  label?: string;
  inputPlace: string;
  inputRef: any;
  error?: {
    message?: string;
  };
}

const FormField = ({ required, name, type, label, inputPlace,inputRef, error }: Props) => {
  return (
    <Form.Field required={required}>
      <label>{label}</label>
      <input name={name} type={type} placeholder={inputPlace} ref={inputRef} />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </Form.Field>
  );
};

export default FormField;
