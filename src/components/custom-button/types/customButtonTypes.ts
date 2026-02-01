import type { PrimitiveTypes } from "../../../types/basicTypes";
import type { ReactElement } from "../../../types/reactTypes";

//type for custom button props
type CustomButtonProps = {
  name?: PrimitiveTypes["string"];
  className?: PrimitiveTypes["string"];
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  id?: PrimitiveTypes["string"];
  loading?: PrimitiveTypes["boolean"];
  type?: "submit" | "reset" | "button";
};

export type { CustomButtonProps };
