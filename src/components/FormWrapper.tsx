import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import {
  FormProvider,
  useForm,
  type FieldValues,
  type SubmitHandler,
  type UseFormProps,
} from "react-hook-form";
import { ObjectSchema } from "yup";

type FormWrapperProps<T extends FieldValues> = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<T>;
  schema?: ObjectSchema<any>;
  defaultValues?: UseFormProps<T>["defaultValues"];
  showButtons?: boolean;
  submitLabel?: string;
  hideResetBtn?: boolean;
  resetLabel?: string;
};

const FormWrapper = <T extends FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues,
  showButtons = true,
  submitLabel = "Submit",
  resetLabel = "Reset",
  hideResetBtn = false,
}: FormWrapperProps<T>) => {
  const methods = useForm<T>({
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {children}

        {showButtons && (
          <div className="d-flex">
            <button type="submit" className="btn btn-lg btn-primary transition">
              {submitLabel}
            </button>
            {hideResetBtn && (
              <button
                type="button"
                onClick={() => reset()}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                {resetLabel}
              </button>
            )}
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
