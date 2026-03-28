"use client";
import { SignInAction } from "@/actions/authActions";
import { Input } from "../ui/Input";
import { Submit } from "../ui/Submit";
import toast from "react-hot-toast";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export const SignInForm = () => {
  const handleAction = async (formData: FormData) => {
    try {
      await SignInAction(formData);
      toast.success("Logging in");
    } catch (e) {
      if (isRedirectError(e)) return;
      toast.error("The user don't exists");
    }
  };
  return (
    <form className="flex flex-col gap-2.5 px-8" action={handleAction}>
      <label htmlFor="email">Email</label>
      <Input id="email" name="email" required />
      <label htmlFor="password">Password</label>
      <Input type="password" id="password" name="password" required />
      <Submit name="Sign in" className="mt-5" pedingMessage="Login..." />
    </form>
  );
};
