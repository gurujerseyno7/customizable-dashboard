import type { PrimitiveTypes } from "../../../types/basicTypes";
import type { ReactElement } from "../../../types/reactTypes";

//type for custom badge props
type CustomBadgeProps = {
  name: PrimitiveTypes["string"];
  icon?: ReactElement;
  className?: PrimitiveTypes["string"];
  onClick?: () => void;
};

export type { CustomBadgeProps };
