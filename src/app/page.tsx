import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { PiListBulletsBold } from "react-icons/pi";

export default function Home() {
  return (
    <div className="flex justify-center p-8 w-screen">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-bold text-3xl">Available routes:</h1>
        <div className="flex flex-col gap-3 text-blue-600 text-md">
          <div className="flex items-center gap-2">
            <PiListBulletsBold size={20} />
            <Link href="/queries">
              <i className="no-underline">/queries</i> -{" "}
              <u>
                <strong>View</strong> Users and Posts
              </u>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <BiEditAlt size={20} />
            <Link href="/mutations">
              <i className="no-underline">/mutations</i> -{" "}
              <u>
                <strong>Create</strong>, <strong>Edit</strong> or{" "}
                <strong>Delete</strong> Users and Posts
              </u>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
