import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TableForm from "../components/common/TableForm";
import { formFields } from "@/utils/FormFields";
import { Metadata } from "next";
import { TiHomeOutline } from "react-icons/ti";
import Link from "next/link";
import { PiListBulletsBold } from "react-icons/pi";

export const metadata: Metadata = {
  title: "API View - Mutations",
};

export default function MutationsPage() {
  // User mutations
  const CREATE_USER_MUTATION = `#graphql
    mutation createUser($data: CreateUserInput!) {
      createUser(data: $data) {
        id
        firstName
        lastName
        userName
        createdAt
      }
    }
  `;
  const UPDATE_USER_MUTATION = `#graphql
  mutation updateUser($filter: UserFilter!, $data: EditUserInput!) {
    updateUser(filter: $filter, data: $data) {
      id
      firstName
      lastName
      userName
      createdAt
    }
  }
`;

  const DELETE_USER_MUTATION = `#graphql
    mutation deleteUser($filter: UserFilter!) {
      deleteUser(filter: $filter) {
        id
        firstName
        lastName
        userName
        createdAt
      }
    }

  `;

  // Post mutations
  const CREATE_POST_MUTATION = `#graphql
    mutation createPost($data: CreatePostInput!) {
      createPost(data: $data) {
        id
        title
        body
        userId
        createdAt
      }
    }

`;

  const UPDATE_POST_MUTATION = `#graphql
    mutation updatePost($filter: PostFilter!, $data: EditPostInput!) {
      updatePost(filter: $filter, data: $data) {
        id
        title
        body
        userId
        createdAt
      }
    }
  `;

  const DELETE_POST_MUTATION = `#graphql
  mutation deletePost($filter: PostFilter!) {
    deletePost(filter: $filter) {
      id
      title
      body
      userId
      createdAt
    }
  }
`;

  return (
    <div className="mx-auto md:px-8 pt-6 pb-16 w-4/5 min-h-screen">
      <div className="flex flex-col gap-2 mb-12 text-blue-600 text-md underline">
        <div className="flex items-center gap-2">
          <TiHomeOutline size={20} />
          <Link href="/">
            <strong>Home</strong>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <PiListBulletsBold size={20} />
          <Link href="/queries">
            <strong>Queries</strong>
          </Link>
        </div>
      </div>
      <Tabs defaultValue="users" className="mx-auto">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <Tabs defaultValue="create" className="mx-auto">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="create">Create</TabsTrigger>
              <TabsTrigger value="update">Update</TabsTrigger>
              <TabsTrigger value="delete">Delete</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
              <TableForm
                fields={formFields.user.mutation.create}
                gqlString={CREATE_USER_MUTATION}
                buttonContent="Create"
                buttonVariant="positive"
              />
            </TabsContent>
            <TabsContent value="update">
              <TableForm
                fields={formFields.user.mutation.update}
                gqlString={UPDATE_USER_MUTATION}
                buttonContent="Update"
              />
            </TabsContent>
            <TabsContent value="delete">
              <TableForm
                fields={formFields.user.mutation.delete}
                gqlString={DELETE_USER_MUTATION}
                buttonContent="Delete"
                buttonVariant="negative"
              />
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value="posts">
          <Tabs defaultValue="create" className="mx-auto">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="create">Create</TabsTrigger>
              <TabsTrigger value="update">Update</TabsTrigger>
              <TabsTrigger value="delete">Delete</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
              <TableForm
                fields={formFields.post.mutation.create}
                gqlString={CREATE_POST_MUTATION}
                buttonContent="Create"
                buttonVariant="positive"
              />
            </TabsContent>
            <TabsContent value="update">
              <TableForm
                fields={formFields.post.mutation.update}
                gqlString={UPDATE_POST_MUTATION}
                buttonContent="Update"
              />
            </TabsContent>
            <TabsContent value="delete">
              <TableForm
                fields={formFields.post.mutation.delete}
                gqlString={DELETE_POST_MUTATION}
                buttonContent="Delete"
                buttonVariant="negative"
              />
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
}
