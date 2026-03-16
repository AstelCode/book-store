import { useState } from "react";

export const UploadImage = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };
  return (
    <div className="flex flex-col justify-center gap-3">
      <img
        src={preview || "https://placehold.co/200x400"}
        className="w-full h-80 object-cover border rounded"
      />
      <label className="w-full text-center py-1 bg-btn-primary text-btn-secondary rounded-md hover:bg-btn-primary-hover">
        Subir portada
        <input type="file" hidden accept="image/*" onChange={handleImage} />
      </label>
    </div>
  );
};
