"use client";
import { formatDate } from "@/utils/utils";
import { IoOpenOutline } from "react-icons/io5";

interface TableProps {
  headers: string[];
  options: { name: string; date: Date; price: number }[];
}
export const Table = ({ headers, options: rows }: TableProps) => {
  return (
    <div className="border bg-card text-center rounded-md overflow-hidden">
      <table className="w-full ">
        <thead className="h-11 bg-card-hover border-b-border-dark border-b w-full">
          <tr>
            {headers.map((header) => (
              <td key={header}>{header}</td>
            ))}

            <td></td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="h-12">
              <td>{row.name}</td>
              <td>{formatDate(row.date)}</td>
              <td className="font-extrabold">{row.price}$</td>
              <td>
                <IoOpenOutline size={20} className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
