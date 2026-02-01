import type { LineChartProps } from "../../layouts/line-chart/types/lineChartTypes";
import type { OverallResponse } from "../../services/types/mockApiTypes";
import type { DashboardStoreState } from "../../store/types/dashboardStoreTypes";
import type { IndexedTypes, MappedTypes } from "../../types/advancedTypes";
import type { PrimitiveTypes } from "../../types/basicTypes";
import type { SetStateUpdate } from "../../types/reactTypes";
import type { TanStackQueryTypes } from "../../types/tanstackQueryTypes";

//type for chart categories
type ChartCategories = {
  name: PrimitiveTypes["string"];
  id: 'token'|'latency'|'cost';
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
