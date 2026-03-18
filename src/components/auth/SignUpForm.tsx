import { SignUpAction } from "@/actions/authActions";
import { Input } from "../ui/Input";
import { Submit } from "../ui/Submit";

export const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-2.5 px-8" action={SignUpAction}>
      <label htmlFor="name-signup">Name</label>
      <Input id="name-signup" name="name" />
      <label htmlFor="email-signup">Email</label>
      <Input type="email" name="email" id="email-signup" />
      <label htmlFor="password-signup">Password</label>
      <Input id="password-signup" name="password" />
      <Submit name="Sign up" className="mt-5" pedingMessage="Login..." />
    </form>
  );
};
