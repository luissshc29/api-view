import React from "react";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  indexRef: number;
  createdAt: string;
  // posts: Post[]
};

export type Post = {
  id: string;
  title: string;
  body: string;
  indexRef: number;
  createdAt: string;
  userId: string;
  // user: User[]
};

export type FormFieldType = {
  fieldName: string;
  inputLabel: string;
  inputPlaceholder?: string;
  required?: boolean;
  pattern?: RegExp;
  type?: React.HTMLInputTypeAttribute | "textarea";
};
