import type { CustomBadgeProps } from "./types/customBadgeTypes";

const CustomBadge = ({ name, className, onClick }: CustomBadgeProps) => {
  return (
    <button
      className={`bg-transparent border cursor-pointer border-blue-700 px-1.5 py-1 text-xs font-medium rounded-lg ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CustomBadge;
