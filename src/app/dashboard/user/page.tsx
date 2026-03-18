import { GetCurrentUserAction } from "@/actions/authActions";
import { Table } from "@/components/user/Table";
import { UserProfileCard } from "@/components/user/UserProfileCard";
import { redirect } from "next/navigation";

export default async function User() {
  const user = await GetCurrentUserAction();
  if (!user) {
    redirect("/auth");
  }
  return (
    <div className="h-full grid grid-rows-[10rem_1fr] py-4 gap-5">
      <UserProfileCard />
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
    </div>
  );
}
