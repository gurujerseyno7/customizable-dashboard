//custom hook to handle chart layouts

import type { Layout, LayoutItem } from "react-grid-layout";
import type { PrimitiveTypes } from "../../../types/basicTypes";
import type { ChartCategoriesData } from "../../../app/pages/dashboard/types/dashboardTypes";
import type { UseHandleLayoutsTypes } from "../types/gridLayoutTypes";

const useHandleLayouts = ({
  breakpoint,
  chartLayouts,
  handleLayout,
  dashboardData,
  handleChartSelection,
}: UseHandleLayoutsTypes) => {
  const handleChartLayout = (newLayout: Layout) => {
    const filteredTitles = chartLayouts[breakpoint]?.filter(
      (layout: LayoutItem) =>
        !newLayout?.map((item) => item.i)?.includes(layout.i),
    );

    const modifieldLayouts = [...newLayout, ...(filteredTitles as Layout)];
    const updatedLayouts = {
      ...chartLayouts,
      [breakpoint]: modifieldLayouts,
    };

    handleLayout(updatedLayouts);
  };

  //function to handle chart type
  const handleChartType = (
    type: PrimitiveTypes["string"],
    title: PrimitiveTypes["string"],
  ) => {
    const updatedCharts = dashboardData?.map((chart: ChartCategoriesData) => ({
      ...chart,
      type: title === chart.title ? type : chart.type,
    }));

    handleChartSelection(updatedCharts);
  };

  return { handleChartLayout, handleChartType };
};

export { useHandleLayouts };
