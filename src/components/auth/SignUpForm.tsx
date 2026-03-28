"use client";
import { SignUpAction } from "@/actions/authActions";
import { Input } from "../ui/Input";
import { Submit } from "../ui/Submit";
import { toast } from "react-hot-toast";
import { isRedirectError } from "next/dist/client/components/redirect-error";
export const SignUpForm = () => {
  const handleAction = async (formData: FormData) => {
    try {
      await SignUpAction(formData);
    } catch (e) {
      if (isRedirectError(e)) return;
      toast.error("The parameters are implete");
    }
  };

  return (
    <form className="flex flex-col gap-2.5 px-8" action={handleAction}>
      <label htmlFor="name-signup">Name</label>
      <Input id="name-signup" name="name" required />
      <label htmlFor="email-signup">Email</label>
      <Input type="email" name="email" id="email-signup" required />
      <label htmlFor="password-signup">Password</label>
      <Input id="password-signup" name="password" required />
      <Submit name="Sign up" className="mt-5" pedingMessage="Login..." />
    </form>
  );
};
