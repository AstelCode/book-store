import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

export const ImageInput = ({
  logo,
  size,
}: {
  logo?: boolean;
  size?: number;
}) => {
  const [preview, setPreview] = useState<string | null>(null);
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
          height={logo ? 200 : 400}
          src={
            preview ||
            (logo
              ? "https://placehold.co/400x400"
              : "https://placehold.co/200x400")
          }
          className={` object-cover ${size != undefined ? `size-${size}` : "size-30"} ${logo ? `rounded-full ` : "h-80 w-60"}`}
        />
        <input type="file" hidden accept="image/*" onChange={handleImage} />

        {preview && (
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setPreview(null);
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
