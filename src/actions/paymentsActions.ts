"use server";

import { getGlobalPayments } from "@/lib/UsersData";

export const getGlobalPaymentsAction = async () => {
  const payments = await getGlobalPayments();
  return payments;
};
