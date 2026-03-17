"use client";
import { useState } from "react";
import { UserInfo } from "../../../components/user/UserInfo";
import { Table } from "../../../components/user/Table";
import { EditModal } from "../../../components/user/EditModal";

export default function User() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onEdit = () => {
    setIsOpen(true);
  };

  return (
    <div className="h-full grid grid-rows-[10rem_1fr] py-4 gap-5">
      <UserInfo onEdit={onEdit} />
      <div className="grid grid-rows-[3rem_1fr]">
        <div className="">
          <span className="border-b-btn-primary border-b pb-2">
            My purchases
          </span>
        </div>
        <Table
          options={[
            { name: "Book1", date: new Date("12-08-2020"), price: 15 },
            { name: "Book1", date: new Date("12-08-2020"), price: 15 },
            { name: "Book1", date: new Date("12-08-2020"), price: 15 },
            { name: "Book1", date: new Date("08-12-2020"), price: 15 },
            { name: "Book1", date: new Date("12-08-2020"), price: 15 },
            { name: "Book1", date: new Date("12-08-2020"), price: 15 },
          ]}
        />
      </div>
      <EditModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
