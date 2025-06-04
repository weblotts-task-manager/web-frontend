import type React from "react";
import type { InputHTMLAttributes } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Controller, type Control } from "react-hook-form";
// import type { IconType } from "react-icons";

type InputProps = {
  name: string;
  label: string;
  control: Control<any>;
  placeholder?: string;
  // icon?: IconType;
  rules?: any;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField: React.FC<InputProps> = ({
  name,
  label,
  control,
  placeholder,
  // icon: Icon,
  ...props
}) => {
  return (
    <FloatingLabel className="mb-4" label={label} id={name}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Control
              id={name}
              placeholder={placeholder}
              {...field}
              {...(() => {
                const { size, ...rest } = props;
                return typeof size === "number" ? rest : props;
              })()}
              className="flex-1 outline-none"
              autoComplete="off"
            />
            {error && (
              <Form.Text className="text-danger text-sm mt-2">
                {error.message}
              </Form.Text>
            )}
          </>
        )}
      ></Controller>
    </FloatingLabel>
  );
};

export default InputField;
