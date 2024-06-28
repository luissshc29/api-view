import React, { Key } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Post, User } from "@/utils/Types";
import { Skeleton } from "@/components/ui/skeleton";

interface CommonTableProps {
  loading?: boolean;
  data: Post | Post[] | User | User[];
  caption?: string;
}

export default function CommonTable({
  data,
  loading = false,
  caption = "",
}: CommonTableProps) {
  const isDataAnArray = Array.isArray(data);
  const attributes = isDataAnArray
    ? Object.keys(data[0]).filter((item) => item !== "__typename")
    : Object.keys(data).filter((item) => item !== "__typename");

  if (loading) {
    return (
      <div className="flex flex-col gap-2 mt-4 w-full">
        <Skeleton className="w-full h-[10vh]" />
      </div>
    );
  }

  return (
    <Table>
      <TableCaption>{caption}</TableCaption>
      <TableHeader className="h-[10vh]">
        <TableRow>
          {attributes.map((attr) => (
            <TableHead className="text-center" key={attr}>
              {attr}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {isDataAnArray ? (
          data.map((item: any) => (
            <TableRow key={item.id as Key}>
              {attributes.map((attr) => (
                <TableCell key={attr}>
                  {attr === "createdAt"
                    ? new Date(item.createdAt).toLocaleString()
                    : // : attr === "body"
                      // ? item.body.slice(0, 80) + " ..."
                      item[attr]}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            {attributes.map((attr: any) => (
              <TableCell key={attr}>
                {attr === "createdAt"
                  ? new Date(data.createdAt).toLocaleString()
                  : // : attr === "body"
                    // ? item.body.slice(0, 80) + " ..."
                    ([data][0] as any)[attr]}
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
