import { ReactElement } from "react";
import { Control, FieldPathByValue, FieldValues, PathValue, useController } from "react-hook-form";

import { Select, SelectProps } from "./select";

export type FormSelectProps<
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
> = Omit<SelectProps, "defaultValue" | "onBlur" | "onChange" | "value"> & {
  control: Control<TFieldValues>;
  defaultValue?: PathValue<TFieldValues, TPath>;
  name: TPath;
} & { containerClassName?: string };

export const FormSelect = <
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
>({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  containerClassName,
  control,
  defaultValue,
  name,
  ...props
}: FormSelectProps<TFieldValues, TPath>): ReactElement | null => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <Select
      {...props}
      defaultValue={field.value}
      error={fieldState.isTouched && (fieldState.error?.message ?? fieldState.error?.type)}
      onValueChange={field.onChange}
    >
      {children}
    </Select>
  );
};
