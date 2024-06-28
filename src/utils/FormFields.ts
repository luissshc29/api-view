import { FormFieldType } from "./Types";

export const formFields: {
  user: {
    query: {
      get: {
        user: FormFieldType[];
        users: FormFieldType[];
      };
    };
    mutation: {
      create: FormFieldType[];
      update: FormFieldType[];
      delete: FormFieldType[];
    };
  };
  post: {
    query: {
      get: {
        post: {
          id: FormFieldType[];
        };
        posts: {
          all: FormFieldType[];
          user: FormFieldType[];
        };
      };
    };
    mutation: {
      create: FormFieldType[];
      update: FormFieldType[];
      delete: FormFieldType[];
    };
  };
} = {
  user: {
    query: {
      get: {
        user: [
          {
            fieldName: "id",
            inputLabel: "User ID*",
            inputPlaceholder: "ID",
            required: true,
            type: "number",
          },
        ],
        users: [],
      },
    },
    mutation: {
      create: [
        {
          fieldName: "firstName",
          inputLabel: "First name*",
          inputPlaceholder: "E.g.: John",
          required: true,
        },
        {
          fieldName: "lastName",
          inputLabel: "Last name*",
          inputPlaceholder: "E.g.: Doe",
          required: true,
        },
        {
          fieldName: "userName",
          inputLabel: "Username*",
          inputPlaceholder: "E.g.: john.doe",
          required: true,
        },
      ],
      update: [
        {
          fieldName: "id",
          inputLabel: "User ID*",
          inputPlaceholder: "ID",
          required: true,
          type: "number",
        },
        {
          fieldName: "firstName",
          inputLabel: "First name",
          inputPlaceholder: "New First name",
        },
        {
          fieldName: "lastName",
          inputLabel: "Last name",
          inputPlaceholder: "New Last name",
        },
        {
          fieldName: "userName",
          inputLabel: "Username",
          inputPlaceholder: "New username",
        },
      ],
      delete: [
        {
          fieldName: "id",
          inputLabel: "User ID*",
          inputPlaceholder: "ID",
          required: true,
          type: "number",
        },
      ],
    },
  },
  post: {
    query: {
      get: {
        post: {
          id: [
            {
              fieldName: "id",
              inputLabel: "Post ID*",
              inputPlaceholder: "ID",
              required: true,
              type: "number",
            },
          ],
        },
        posts: {
          all: [],
          user: [
            {
              fieldName: "id",
              inputLabel: "User ID*",
              inputPlaceholder: "ID",
              required: true,
              type: "number",
            },
          ],
        },
      },
    },
    mutation: {
      create: [
        {
          fieldName: "title",
          inputLabel: "Post title*",
          inputPlaceholder: "E.g.: Lorem Ipsum",
          required: true,
        },
        {
          fieldName: "body",
          inputLabel: "Post body*",
          inputPlaceholder: "E.g.: Dolor sit amet",
          required: true,
        },
        {
          fieldName: "userId",
          inputLabel: "User ID*",
          inputPlaceholder: "Post author ID",
          required: true,
          type: "number",
        },
      ],
      update: [
        {
          fieldName: "id",
          inputLabel: "Post ID*",
          inputPlaceholder: "ID",
          required: true,
          type: "number",
        },
        {
          fieldName: "title",
          inputLabel: "New Post title",
          inputPlaceholder: "E.g.: Post title",
        },
        {
          fieldName: "body",
          inputLabel: "New Post body",
          inputPlaceholder: "E.g.: Post body",
        },
      ],
      delete: [
        {
          fieldName: "id",
          inputLabel: "Post ID*",
          inputPlaceholder: "ID",
          required: true,
          type: "number",
        },
      ],
    },
  },
};
