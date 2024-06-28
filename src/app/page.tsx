import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { PiListBulletsBold } from "react-icons/pi";

export default function Home() {
  return (
    <div className="flex justify-center p-8 w-screen">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">Available routes:</h1>
        <Separator className="bg-neutral-300 mb-8" />
        <div className="flex flex-col gap-4 text-blue-600">
          <div className="flex items-center gap-2">
            <PiListBulletsBold size={20} />
            <Link
              href="/queries"
              className="flex items-center gap-1 text-center text-sm md:text-base"
            >
              <i>/queries</i> -{" "}
              <div className="underline">
                <strong>View</strong> Users and Posts
              </div>
            </Link>
          </div>
          <Separator className="bg-neutral-300" />
          <div className="flex items-center gap-2">
            <BiEditAlt size={22} />
            <Link
              href="/mutations"
              className="flex items-center gap-1 text-center text-sm md:text-base"
            >
              <i>/mutations</i> -{" "}
              <div className="underline">
                <strong>Create</strong>, <strong>Edit</strong> or{" "}
                <strong>Delete</strong> Users and Posts
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
