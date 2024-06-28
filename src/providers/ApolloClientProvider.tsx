"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_SERVER_URL;
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
