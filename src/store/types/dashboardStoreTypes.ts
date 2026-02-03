import type { Layout, LayoutItem } from "react-grid-layout";
import type {
  ChartCategories,
  ChartCategoriesData,
} from "../../../types/dashboardTypes";
import type { PrimitiveTypes } from "../../types/basicTypes";

//type for message toast
type MessageToastType = {
  show: PrimitiveTypes["boolean"];
  message?: PrimitiveTypes["string"];
  severity?: "success" | "warning" | "error" | PrimitiveTypes["undefined"];
};

//type for dashboard store
type DashboardStoreState = {
  chartCategories: ChartCategories[];
  breakpoint: PrimitiveTypes["string"];
  chartLayouts: Partial<Record<string, Layout>>;
  handleChartLayouts: (layouts: {
    [x: string]: Layout | LayoutItem[] | undefined;
  }) => void;
  chartDatas: ChartCategoriesData[];
  toast: MessageToastType;
  handleChartSelection: (name: PrimitiveTypes["string"]) => void;
  handleChartDatas: () => void;
  handleBreakpoint: (name: PrimitiveTypes["string"]) => void;
  handleChartType: (datas: ChartCategoriesData[]) => void;
  handleToast: (toast: MessageToastType) => void;
};

export type { DashboardStoreState, MessageToastType };
