import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TableForm from "../components/common/TableForm";
import { formFields } from "@/utils/FormFields";
import { Metadata } from "next";
import Link from "next/link";
import { TiHomeOutline } from "react-icons/ti";
import { BiEditAlt } from "react-icons/bi";

export const metadata: Metadata = {
  title: "API View - Queries",
};

export default function QueriesPage() {
  // Get all users
  const GET_USERS_QUERY = `#graphql
    query getUsers {
      getUsers {
        id
        firstName
        lastName
        userName
        createdAt
      }
    }
  `;
  // Get all posts
  const GET_POSTS_QUERY = `#graphql
    query getPosts {
      getPosts {
        id
        title
        body
        userId
        createdAt
      }
    }
  `;
  // Get user by ID
  const GET_USER_BY_ID_QUERY = `#graphql
    query getUser ($filter: UserFilter!) {
      getUser(filter: $filter) {
        id
        firstName
        lastName
        userName
        createdAt
      }
    }
  `;
  // Get post by ID
  const GET_POST_BY_ID_QUERY = `#graphql
    query getPost ($filter: PostFilter!) {
      getPost(filter: $filter) {
        id
        title
        body
        userId
        createdAt
      }
    }
  `;
  // Get posts by userId
  const GET_POSTS_BY_USER_ID_QUERY = `#graphql
    query getPosts($filter: PostFilter) {
      getPosts(filter: $filter) {
        id 
        title 
        body 
        userId 
        createdAt
      }
}
  `;

  return (
    <div className="mx-auto md:px-8 py-6 w-4/5">
      <div className="flex flex-col gap-2 mb-12 text-blue-600 text-md text-sm md:text-base underline">
        <div className="flex items-center gap-2">
          <TiHomeOutline size={20} />
          <Link href="/">
            <strong>Home</strong>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <BiEditAlt size={20} />
          <Link href="/mutations">
            <strong>Mutations</strong>
          </Link>
        </div>
      </div>
      <Tabs defaultValue="users" className="mx-auto">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <Tabs defaultValue="users-all" className="mx-auto">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="users-all">All</TabsTrigger>
              <TabsTrigger value="user-by-id">By ID</TabsTrigger>
            </TabsList>
            <TabsContent value="users-all">
              <TableForm
                fields={formFields.user.query.get.users}
                buttonContent="Fetch all users"
                gqlString={GET_USERS_QUERY}
                tableCaption="Listing all users"
              />
            </TabsContent>
            <TabsContent value="user-by-id">
              <TableForm
                fields={formFields.user.query.get.user}
                buttonContent="Search"
                gqlString={GET_USER_BY_ID_QUERY}
                // tableCaption={`Listing user " "`}
              />
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value="posts">
          <Tabs defaultValue="posts-all" className="mx-auto">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="posts-all">All</TabsTrigger>
              <TabsTrigger value="post-by-id">By ID</TabsTrigger>
              <TabsTrigger value="post-by-user">By User</TabsTrigger>
            </TabsList>
            <TabsContent value="posts-all">
              <TableForm
                fields={formFields.post.query.get.posts.all}
                buttonContent="Fetch all posts"
                gqlString={GET_POSTS_QUERY}
                tableCaption="Listing all posts"
              />
            </TabsContent>
            <TabsContent value="post-by-id">
              <TableForm
                fields={formFields.post.query.get.post.id}
                buttonContent="Search"
                gqlString={GET_POST_BY_ID_QUERY}
                // tableCaption={`Listing post " "`}
              />
            </TabsContent>
            <TabsContent value="post-by-user">
              <TableForm
                fields={formFields.post.query.get.posts.user}
                buttonContent="Search"
                gqlString={GET_POSTS_BY_USER_ID_QUERY}
                // tableCaption={`Listing post " "`}
              />
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
}
