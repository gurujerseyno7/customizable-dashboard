import type { IndexedTypes } from "../../../types/advancedTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for bar chart props
type BarChartProps = {
  height: PrimitiveTypes["number"];
  width: PrimitiveTypes["number"];
  data: IndexedTypes<PrimitiveTypes["string"] | PrimitiveTypes["number"]>[];
};

export type { BarChartProps };
