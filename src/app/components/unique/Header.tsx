import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-wrap justify-around items-center gap-4 bg-blue-600 shadow-lg shadow-neutral-400 p-12 w-screen">
      <Link href="/" className="font-bold text-5xl text-white">
        API View
      </Link>
      <div className="flex items-center gap-2 text-white">
        <p className="font-bold">API Url: </p>
        <a
          href={process.env.NEXT_PUBLIC_SERVER_URL}
          target="_blank"
          className="underline"
        >
          {process.env.NEXT_PUBLIC_SERVER_URL}
        </a>
      </div>
    </div>
  );
}
