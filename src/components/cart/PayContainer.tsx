import { PayButton } from "./PayButton";

export const PayContainer = ({ totalPrice }: { totalPrice?: number }) => {
  return (
    <div className="flex justify-center items-center border border-border-dark">
      <div className="w-full h-full bg-card py-10 flex flex-col gap-10">
        <div className="flex justify-between px-14">
          <h6 className="font-inter text-xl">Total</h6>
          <span className="font-inter font-extrabold text-xl">
            ${totalPrice}
          </span>
        </div>
        <div className="px-12">
          <PayButton price={totalPrice!} />
        </div>
      </div>
    </div>
  );
};
