import type { IndexedTypes } from "../../../types/advancedTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";
import type { ReactElement } from "../../../types/reactTypes";

//type for grid container props
type GridContainerProps = {
  data: IndexedTypes<PrimitiveTypes["string"] | PrimitiveTypes["number"]>[];
  title: PrimitiveTypes["string"];
  style: IndexedTypes<PrimitiveTypes["string"]>;
  className: PrimitiveTypes["string"];
  id: "token" | "latency" | "cost";
  children: ReactElement;
  type: "pie" | "bar" | "line";
  menuOptions: PrimitiveTypes["string"][];
  onMenuClick: (
    type: PrimitiveTypes["string"],
    title: PrimitiveTypes["string"],
  ) => void;
};

export type { GridContainerProps };
