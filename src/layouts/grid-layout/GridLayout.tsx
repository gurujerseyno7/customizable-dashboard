import type { GridLayoutProps } from "./types/gridLayoutTypes";
import {
  Responsive,
  verticalCompactor,
  type LayoutItem,
} from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import GridContainer from "../grid-container/GridContainer";
import useDashboardStore from "../../store/dashboardStore";
import { useShallow } from "zustand/shallow";
import { useHandleLayouts } from "./hooks/useHandleLayouts";

const GridLayout = ({ width }: GridLayoutProps) => {
  const dashboardData = useDashboardStore((state) => state.chartDatas);
  const {
    handleLayout,
    handleBreakpoint,
    chartLayouts,
    breakpoint,
    handleChartSelection,
  } = useDashboardStore(
    useShallow((state) => ({
      chartLayouts: state.chartLayouts,
      handleLayout: state.handleChartLayouts,
      handleBreakpoint: state.handleBreakpoint,
      breakpoint: state.breakpoint,
      handleChartSelection: state.handleChartType,
    })),
  );

  const { handleChartLayout, handleChartType } = useHandleLayouts({
    breakpoint,
    chartLayouts,
    handleLayout,
    dashboardData,
    handleChartSelection,
  });


  return (
    <Responsive
      width={width}
      layouts={chartLayouts}
      resizeConfig={{ enabled: true }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      compactor={verticalCompactor}
      onBreakpointChange={(breakpoint) => {
        handleBreakpoint(breakpoint);
      }}
      onLayoutChange={(newLayout) => {
        handleChartLayout(newLayout);
      }}
    >
      {dashboardData
        ?.filter?.((chart) => chart.selected)
        ?.map(({ id, ...rest }) => (
          <GridContainer
            key={id}
            onMenuClick={handleChartType}
            {...(rest as any)}
          />
        ))}
    </Responsive>
  );
};

export default GridLayout;
