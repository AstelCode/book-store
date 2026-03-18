import { SignInAction } from "@/actions/authActions";
import { Input } from "../ui/Input";
import { Submit } from "../ui/Submit";

export const SignInForm = () => {
  return (
    <form className="flex flex-col gap-2.5 px-8" action={SignInAction}>
      <label htmlFor="email">Email</label>
      <Input id="email" name="email" />
      <label htmlFor="password">Password</label>
      <Input type="password" id="password" name="password" />
      <Submit name="Sign in" className="mt-5" pedingMessage="Login..." />
    </form>
  );
};
