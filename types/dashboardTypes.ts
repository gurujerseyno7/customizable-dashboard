import type { LineChartProps } from "../src/layouts/line-chart/types/lineChartTypes";
import type { OverallResponse } from "../src/services/types/mockApiTypes";
import type { DashboardStoreState } from "../src/store/types/dashboardStoreTypes";
import type { IndexedTypes, MappedTypes } from "../src/types/advancedTypes";
import type { PrimitiveTypes } from "../src/types/basicTypes";
import type { SetStateUpdate } from "../src/types/reactTypes";
import type { TanStackQueryTypes } from "../src/types/tanstackQueryTypes";

//type for chart categories
type ChartCategories = {
  name: PrimitiveTypes["string"];
  id: "token" | "latency" | "cost";
  active: PrimitiveTypes["boolean"];
};

//type for chart categories data
type ChartCategoriesData = MappedTypes<
  "Chart",
  ({ width, height, data }: LineChartProps) => React.JSX.Element
> &
  MappedTypes<"id", "token" | "latency" | "cost"> &
  MappedTypes<"title", PrimitiveTypes["string"]> &
  IndexedTypes<
    | (PrimitiveTypes["number"] | PrimitiveTypes["string"])[]
    | Function
    | "token"
    | "latency"
    | "cost"
    | PrimitiveTypes["string"]
    | PrimitiveTypes["boolean"]
  >;

//type for useHandleCharts hook
type UseHandleChartsParams = {
  chartCategories: ChartCategories[];
  setOpen: SetStateUpdate<PrimitiveTypes["boolean"]>;
  tokenRefetch: TanStackQueryTypes["refetch"];
  latencyRefetch: TanStackQueryTypes["refetch"];
  costRefetch: TanStackQueryTypes["refetch"];
  handleChartDatas: (datas: OverallResponse | {}) => void;
  handleToast: DashboardStoreState["handleToast"];
};

export type { UseHandleChartsParams, ChartCategories, ChartCategoriesData };
