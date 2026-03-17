"use client";
import { Input } from "@/components/ui/Input";
import { Submit } from "@/components/ui/Submit";
import { useState } from "react";

interface AuthSwitch {
  isSignUp?: boolean;
  onChange?: (isSignUp: boolean) => void;
}

const AuthSwitch = ({ isSignUp, onChange }: AuthSwitch) => {
  return (
    <div className="w-full h-15 flex flex-col items-center">
      <div className="w-40 h-10 rounded-md bg-white border relative">
        {/* slider */}
        <div
          className={`absolute top-0 left-0 w-20 h-10 bg-btn-primary rounded-md
          transition-transform duration-300 ease-in-out
          ${isSignUp ? "translate-x-20" : "translate-x-0"}`}
        />

        {/* button */}
        <div className="absolute w-full h-10 grid grid-cols-2 items-center">
          <span
            onClick={() => onChange?.(false)}
            className={`text-center cursor-pointer transition-colors duration-300 h-full flex items-center justify-center
            ${isSignUp ? "text-btn-primary" : "text-btn-secondary"}`}
          >
            Sign in
          </span>

          <span
            onClick={() => onChange?.(true)}
            className={`text-center cursor-pointer transition-colors duration-300 flex items-center justify-center
            ${isSignUp ? "text-btn-secondary" : "text-btn-primary"}`}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (isSignUp: boolean) => {
    setIsSignUp(isSignUp);
  };

  return (
    <div className="h-full py-2 flex justify-center items-center">
      <div
        className={`w-90 bg-card border-border-dark border rounded-card flex flex-col py-6  transition-[height] duration-300`}
      >
        <AuthSwitch onChange={handleChange} isSignUp={isSignUp} />
        <div className="overflow-hidden relative">
          <div
            className={`w-180 grid grid-cols-2 ${isSignUp ? "-translate-x-90" : "translate-0"} transition-transform duration-300`}
          >
            <form className="flex flex-col gap-2.5 px-8">
              <label>Name</label>
              <Input />
              <label>Password</label>
              <Input type="password" />
              <Submit name="Sign in" className="mt-5" />
            </form>
            <form className="flex flex-col gap-2.5 px-8">
              <label>Name</label>
              <Input />
              <label>Email</label>
              <Input type="email" />
              <label>Password</label>
              <Input />
              <Submit name="Sign up" className="mt-5" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
