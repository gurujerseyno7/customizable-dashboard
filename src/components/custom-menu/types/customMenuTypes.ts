import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for Custom Menu Props
type CustomMenuProps = {
  title: PrimitiveTypes["string"];
  menuOptions?: PrimitiveTypes["string"][];
  onMenuClick?: (
    item: PrimitiveTypes["string"],
    title: PrimitiveTypes["string"],
  ) => void;
  type?: PrimitiveTypes["string"];
};

export type { CustomMenuProps };
