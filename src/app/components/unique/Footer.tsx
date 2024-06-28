import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-2 lg:col-span-2 mt-auto mb-0 py-6 w-full text-neutral-700 text-xs">
      <p className="h-full">Coded by Luis Henrique |</p>
      <div className="flex gap-2">
        <a href="https://www.instagram.com/luissshc_/">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.linkedin.com/in/luis-henrique-6a7425165/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/luissshc29">
          <AiOutlineGithub />
        </a>
      </div>
    </footer>
  );
}
