import type { IndexedTypes } from "../../../types/advancedTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for pie chart props
type PieChartProps = {
  width: PrimitiveTypes["number"];
  height: PrimitiveTypes["number"];
  data: IndexedTypes<PrimitiveTypes["string"] | PrimitiveTypes["number"]>[];
};

export type { PieChartProps };
