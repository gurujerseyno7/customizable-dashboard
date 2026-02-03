import { create } from "zustand";
import {
  chartCategory,
  dashboardData,
} from "../app/pages/dashboard/datas/staticDatas";
import type { PrimitiveTypes } from "../types/basicTypes";
import type {
  DashboardStoreState,
  MessageToastType,
} from "./types/dashboardStoreTypes";
import type {
  ChartCategories,
  ChartCategoriesData,
} from "../../types/dashboardTypes";
import { chartLayouts } from "../layouts/grid-layout/datas/staticDatas";
import type { OverallResponse } from "../services/types/mockApiTypes";
import { persist } from "zustand/middleware";
import type { Layout } from "react-grid-layout";

//store for dashboard details
const dashboardStore = persist(
  (set: Function) => ({
    chartCategories: chartCategory,
    chartLayouts: chartLayouts,
    chartDatas: [],
    toast: { show: false, message: "", severity: "success" },
    breakpoint: "lg",
    handleChartSelection: (chartName: PrimitiveTypes["string"]) => {
      set((state: DashboardStoreState) => ({
        chartCategories: state.chartCategories?.map(
          (chart: ChartCategories) => ({
            ...chart,
            active: chart.name === chartName ? !chart.active : chart.active,
          }),
        ),
      }));
    },
    handleChartDatas: (datas: OverallResponse) => {
      set((state: DashboardStoreState) => ({
        chartDatas: [
          state.chartDatas?.length > 0 ? state.chartDatas : dashboardData,
        ][0]?.map((chart: ChartCategoriesData) => ({
          ...chart,
          data: Object.keys(datas)?.includes(chart.id)
            ? datas[chart.id]
            : chart.data,
          selected: Object.keys(datas)?.includes(chart.id) ? true : false,
        })),
      }));
    },
    handleChartLayouts: (layouts: Layout) => {
      set(() => ({
        chartLayouts: layouts,
      }));
    },
    handleBreakpoint: (breakpoint: PrimitiveTypes["string"]) => {
      set(() => ({
        breakpoint: breakpoint,
      }));
    },

    handleChartType: (datas: ChartCategoriesData[]) => {
      set(() => ({
        chartDatas: datas,
      }));
    },

    handleToast: (messageToast: MessageToastType) => {
      set(() => ({
        toast: messageToast,
      }));
    },
  }),
  { name: "dashboard" },
);

const useDashboardStore = create<DashboardStoreState>(dashboardStore as any);

export default useDashboardStore;
