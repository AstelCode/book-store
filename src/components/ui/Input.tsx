import clsx from "clsx";
import { InputHTMLAttributes, useState } from "react";
import { GrFormView } from "react-icons/gr";
import { GrHide } from "react-icons/gr";
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  const [hide, setHide] = useState(true);
  if (props.type == "password") {
    return (
      <div className="w-full flex bg-card border border-border-dark rounded-card h-10  ">
        <input
          {...props}
          type={hide ? "password" : "text"}
          className={clsx("w-full pl-3 outline-none", className)}
        />
        <div onClick={() => setHide(!hide)}>
          {hide ? <GrHide size={38} /> : <GrFormView size={38} />}
        </div>
      </div>
    );
  }

  return (
    <input
      {...props}
      className={clsx(
        "bg-card border border-border-dark rounded-card h-10 outline-none pl-3",
        className,
      )}
    />
  );
};
