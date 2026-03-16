"use client";

import { Input } from "@/components/ui/Input";
import { Submit } from "@/components/ui/Submit";
import { UploadImage } from "@/components/ui/UploadImage";
import { useState } from "react";

export default function AddBook() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="border w-140  rounded-md">
        <form className="grid grid-cols-2 h-full p-6 gap-5 grid-rows-[1fr_50px]">
          <UploadImage />
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <Input id="price" type="number" />
            <label htmlFor="price">Price</label>
            <Input id="price" type="number" />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="bg-card border border-border-dark rounded-card min-h-10 outline-none pl-3 pt-2 max-h-[160px]"
            />
          </div>
          <div className="col-start-1 col-span-3 row-start-2">
            <Submit name="Add book" />
          </div>
        </form>
      </div>
    </div>
  );
}
