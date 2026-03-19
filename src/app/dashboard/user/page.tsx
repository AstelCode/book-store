"use server";
import { GetCurrentUserAction } from "@/actions/authActions";
import { getGlobalPaymentsAction } from "@/actions/paymentsActions";
import { PaymentsTable } from "@/components/user/paymentTable/Table";
import { UserProfileCard } from "@/components/user/UserProfileCard";
import { redirect } from "next/navigation";

export default async function User() {
  const user = await GetCurrentUserAction();
  if (!user) {
    redirect("/auth");
  }

  let payments;
  if (user.admin) {
    payments = await getGlobalPaymentsAction();
  } else {
    payments = user.payments;
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
        <PaymentsTable options={payments} isAdmin={user.admin} />
      </div>
    </div>
  );
}
