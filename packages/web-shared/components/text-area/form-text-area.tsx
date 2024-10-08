import { ReactElement } from "react";
import { Control, FieldPathByValue, FieldValues, PathValue, useController } from "react-hook-form";

import { TextArea, TextAreaProps } from "./text-area";

export type FormTextAreaProps<
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
> = Omit<TextAreaProps, "defaultValue" | "onBlur" | "onChange" | "value"> & {
  control: Control<TFieldValues>;
  defaultValue?: PathValue<TFieldValues, TPath>;
  name: TPath;
} & { containerClassName?: string };

export const FormTextArea = <
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  containerClassName,
  control,
  defaultValue,
  name,
  ...props
}: FormTextAreaProps<TFieldValues, TPath>): ReactElement | null => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <TextArea
      {...props}
      {...field}
      error={fieldState.isTouched && (fieldState.error?.message ?? fieldState.error?.type)}
    />
  );
};
