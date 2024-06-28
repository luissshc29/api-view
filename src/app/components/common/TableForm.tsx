"use client";

import React from "react";
import { FormFieldType } from "@/utils/Types";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { getOperationName, isQueryOperation } from "@apollo/client/utilities";
import CommonTable from "./CommonTable";

interface FormProps {
  buttonContent: React.ReactNode;
  gqlString: string;
  fields: FormFieldType[];
  buttonVariant?: "neutral" | "positive" | "negative";
  tableCaption?: string;
}

export default function TableForm({
  fields,
  buttonContent,
  buttonVariant = "neutral",
  gqlString,
  tableCaption = "",
  ...rest
}: FormProps & React.FormHTMLAttributes<HTMLFormElement>) {
  // Defines conditional classNames for the button
  const buttonVariantClassNames =
    buttonVariant === "positive"
      ? "bg-green-600 hover:bg-green-700"
      : buttonVariant === "negative"
      ? "bg-red-600 hover:bg-red-700"
      : "";

  // Converts string to gql string
  const GQL_STRING = gql(gqlString);

  // Checks if the operations is either a query or a mutation
  const [operation, operationInfo] = isQueryOperation(GQL_STRING)
    ? useLazyQuery(GQL_STRING, {
        fetchPolicy: "network-only",
      })
    : useMutation(GQL_STRING, {
        fetchPolicy: "network-only",
      });

  // Gets the operation name on GQL_STRING
  const operationName = getOperationName(GQL_STRING);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    const keys = Object.keys(data);

    // Separating all 'filter' variables given
    let filterObject = {};

    if (keys.includes("id")) {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === "id") {
          filterObject = { id: Number(data[keys[i]]) };
        }
      }
    }

    // Separating all 'data' variables given
    let dataObject: any = {};
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== "id") {
        const key = keys[i];
        if (data[key] !== "") {
          dataObject = { ...dataObject, [key]: data[key] };
        }
      }
    }

    // Turning userId key on dataObject from 'string' to 'number', in case it exists
    if (dataObject.userId) dataObject.userId = Number(dataObject.userId);

    // Assembling both 'filterObject' and 'dataObject' into one object, if they were sent
    let variableObject = {
      variables: {},
    };

    if (Object.keys(filterObject).length > 0) {
      Object.assign(variableObject.variables, { filter: filterObject });
    }
    if (Object.keys(dataObject).length > 0) {
      Object.assign(variableObject.variables, { data: dataObject });
    }

    // Operation called
    operation(variableObject);
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 my-4 w-[45%]"
        {...rest}
      >
        {fields.map((field) => (
          <div key={field.fieldName} className="flex flex-col gap-2">
            <Label htmlFor={field.fieldName} className="text-md">
              {field.inputLabel}
            </Label>
            <Input
              {...register(field.fieldName, {
                required: field.required,
                pattern: field.pattern,
              })}
              type={field.type}
              id={field.fieldName}
              placeholder={field.inputPlaceholder}
              maxLength={191}
            />
          </div>
        ))}
        <Button className={buttonVariantClassNames}>{buttonContent}</Button>
      </form>
      {operationInfo.error && (
        <p className="font-semibold text-center text-red-600">
          {operationInfo.error.message.replaceAll("Error: ", "")}
        </p>
      )}
      {errors && (
        <p className="font-semibold text-center text-red-600">
          {errors.root?.message}
        </p>
      )}
      {operationInfo.data && !operationInfo.loading && (
        <CommonTable
          loading={operationInfo.loading}
          data={operationInfo.data[`${operationName}`]}
          caption={tableCaption}
        />
      )}
    </div>
  );
}
