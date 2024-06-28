import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ApolloClientProvider from "@/providers/ApolloClientProvider";
import Header from "./components/unique/Header";
import Footer from "./components/unique/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "API View",
  description: "Application for visualizing data from a GraphQL API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col w-screen ${inter.className}`}
      >
        <ApolloClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ApolloClientProvider>
      </body>
    </html>
  );
}
