"use client";
import { useState } from "react";
import { AuthSwitch } from "./AuthSwitch";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export const AuthContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (isSignUp: boolean) => {
    setIsSignUp(isSignUp);
  };
  return (
    <div
      className={`w-90 bg-card border-border-dark border rounded-card flex flex-col py-6  transition-[height] duration-300`}
    >
      <AuthSwitch onChange={handleChange} isSignUp={isSignUp} />
      <div className="overflow-hidden relative">
        <div
          className={`w-180 grid grid-cols-2 ${isSignUp ? "-translate-x-90" : "translate-0"} transition-transform duration-300`}
        >
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
