import type { IndexedTypes } from "../../../types/advancedTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for line chart props
type LineChartProps = {
  height: PrimitiveTypes["number"];
  width: PrimitiveTypes["number"];
  data: IndexedTypes<PrimitiveTypes["string"] | PrimitiveTypes["number"]>[];
};

export type { LineChartProps };
