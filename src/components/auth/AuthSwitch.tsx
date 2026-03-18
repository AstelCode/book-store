"use client";
interface AuthSwitch {
  isSignUp?: boolean;
  onChange?: (isSignUp: boolean) => void;
}
export const AuthSwitch = ({ isSignUp, onChange }: AuthSwitch) => {
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
