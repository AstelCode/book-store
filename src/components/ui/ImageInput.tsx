import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useRef } from "react";
import Image from "next/image";

export const ImageInput = ({
  logo,
  size,
  src,
  name,
}: {
  logo?: boolean;
  size?: number;
  name?: string;
  src?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(src ?? null);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };
  return (
    <div
      className={`flex flex-col justify-center items-center gap-3  ${logo ? "rounded-full" : "rounded-md"} `}
    >
      <label
        className={`${logo ? "rounded-full" : "rounded-md"} border relative`}
      >
        <Image
          alt="logo-input"
          width={400}
          height={logo ? 400 : 200}
          src={
            preview ||
            (logo
              ? "https://placehold.co/400x400"
              : "https://placehold.co/200x400")
          }
          style={
            logo
              ? {
                  width: size,
                  height: size,
                }
              : undefined
          }
          className={` object-cover  ${logo ? `rounded-full ` : "h-80 w-60"}`}
        />
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImage}
          name={name}
        />

        {preview && (
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setPreview(null);
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
            className={`absolute -top-4 -right-4 border-border-dark px-2 py-2 bg-btn-secondary border rounded-md hover:bg-btn-secondary-hover`}
          >
            <IoMdClose />
          </div>
        )}
      </label>
    </div>
  );
};
