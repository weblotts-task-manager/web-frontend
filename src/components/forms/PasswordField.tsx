import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Controller, useFormContext, type Control } from "react-hook-form";

type PasswordFieldProps = {
  name: string;
  label: string;
  control?: Control<any>; // Optional if using FormProvider
  placeholder?: string;
};

const PasswordField: React.FC<PasswordFieldProps> = ({
  name,
  label,
  control,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const methods = useFormContext();
  const formControl = control || methods.control;

  return (
    <FloatingLabel className="mb-4" label={label}>
      <Controller
        name={name}
        control={formControl}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Control
              {...field}
              type={showPassword ? "text" : "password"}
              className="flex-1 outline-none"
              placeholder={placeholder}
            />
            <div className="d-flex justify-content-between">
              <div>
                {error && (
                  <Form.Text className="text-danger text-sm">
                    {error.message}
                  </Form.Text>
                )}
              </div>
              <a
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="btn special-btn-text text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </a>
            </div>
          </>
        )}
      />
    </FloatingLabel>
  );
};

export default PasswordField;
