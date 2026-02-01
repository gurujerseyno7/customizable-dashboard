import type { DashboardStoreState } from "../../../store/types/dashboardStoreTypes";
import type { IndexedTypes } from "../../../types/advancedTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";
import type { ReactElement } from "../../../types/reactTypes";

//type for responsive grid layout
type GridLayoutProps = {
  children?: ReactElement;
  width: PrimitiveTypes["number"];
};

//type for chart layouts
type ChartLayoutsTypes = IndexedTypes<SingleChartLayout>;

//type for single chart layout
type SingleChartLayout = IndexedTypes<
  PrimitiveTypes["number"] | PrimitiveTypes["string"]
>[];

//type for useHandleLayout hooks
type UseHandleLayoutsTypes = {
  breakpoint: "lg" | "sm" | "md" | "xs" | PrimitiveTypes["string"];
  chartLayouts: DashboardStoreState["chartLayouts"];
  handleLayout: DashboardStoreState["handleChartLayouts"];
  dashboardData: DashboardStoreState["chartDatas"];
  handleChartSelection: DashboardStoreState["handleChartType"];
};

export type {
  GridLayoutProps,
  ChartLayoutsTypes,
  SingleChartLayout,
  UseHandleLayoutsTypes,
};
