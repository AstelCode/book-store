import { RiExpandRightLine, RiExpandLeftLine } from "react-icons/ri";

export const NavToggleButton = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-12 flex justify-center items-center hover:bg-btn-primary-hover rounded-md"
    >
      {!isOpen ? (
        <RiExpandRightLine size={30} className="fill-btn-secondary" />
      ) : (
        <RiExpandLeftLine size={30} className="fill-btn-secondary" />
      )}
    </div>
  );
};
