import type { CustomButtonProps } from "./types/customButtonTypes";
import CustomSpinner from "../custom-spinner/CustomSpinner";

const CustomButton = ({
  startIcon,
  endIcon,
  name,
  className,
  onClick,
  loading,
  ...props
}: CustomButtonProps) => {
  return (
    <button
      className={`${className} px-1.5 py-1.2 bg-tertiary text-white font-semibold cursor-pointer rounded-lg inline-flex items-center`}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <CustomSpinner />
      ) : (
        <>
          {startIcon}
          {name}
          {endIcon}
        </>
      )}
    </button>
  );
};

export default CustomButton;
