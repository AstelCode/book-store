"use client";

import { moveCartToLibraryAction } from "@/actions/cartActions";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";

export const PayButton = ({ price }: { price: number }) => {
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleFavorite = () => {
    if (isLoading) return;

    setIsLoading(true);

    startTransition(async () => {
      try {
        toast.success("Buying completed");
        await moveCartToLibraryAction(price);
      } finally {
        setIsLoading(false);
      }
    });
  };

  return (
    <button
      onClick={handleFavorite}
      disabled={isLoading}
      className="w-full h-13 bg-btn-primary text-white text-2xl rounded-sm hover:bg-btn-primary-hover grid place-content-center"
    >
      {isLoading || isPending ? (
        <Loader2 className="animate-spin" size={22} />
      ) : (
        <span>Pay</span>
      )}
    </button>
  );
};
