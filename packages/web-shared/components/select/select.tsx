"use client";

import { SelectProps as RadixSelectProps, Root } from "@radix-ui/react-select";
import { FC } from "react";

import { cn } from "../../utils";
import { FormError } from "../form-error";
import { Label } from "../label";

export type SelectProps = RadixSelectProps & {
  containerClassName?: string;
  error?: false | string;
  label?: string;
};

export const Select: FC<SelectProps> = ({ children, containerClassName, error, label, ...props }) => {
  return (
    <div className={cn("max-w-full", containerClassName)}>
      {!!label && <Label>{label}</Label>}
      <Root {...props}>{children}</Root>
      <FormError className="w-full text-end" errorText={error} />
    </div>
  );
};
Select.displayName = "Select";
