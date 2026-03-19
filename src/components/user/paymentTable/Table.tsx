"use client";
import { formatDate } from "@/utils/utils";
import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";

interface PaymentsTableProps {
  options: {
    date: Date;
    price: number;
    userLogo?: string;
    userName?: string;
  }[];
  isAdmin?: boolean;
}

export const PaymentsTable = ({ options, isAdmin }: PaymentsTableProps) => {
  return (
    <div className="border bg-card text-center rounded-md overflow-hidden">
      <table className="w-full ">
        <thead className="h-11 bg-card-hover border-b-border-dark border-b w-full">
          <tr>
            {isAdmin && <td>User</td>}
            <td>Date</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {options.map((row, idx) => (
            <tr key={idx} className="h-15">
              {isAdmin && (
                <td>
                  <div className="flex justify-center items-center gap-4">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                      <Image src={row.userLogo!} fill alt="user-logo" />
                    </div>
                    <span>{row.userName}</span>
                  </div>
                </td>
              )}
              <td>{formatDate(row.date)}</td>
              <td className="font-extrabold">{row.price}$</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
