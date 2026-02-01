import CustomButton from "../../../components/custom-button/CustomButton";
import { IoIosAdd } from "react-icons/io";
import CustomDialog from "../../../components/custom-dialog/CustomDialog";
import { useCommonDashboardStates } from "./hooks/useCommonDashboardStates";
import CustomBadge from "../../../components/custom-badge/CustomBadge";
import { useHandleCharts } from "./hooks/useHandleCharts";
import useDashboardStore from "../../../store/dashboardStore";
import { useShallow } from "zustand/shallow";
import GridLayout from "../../../layouts/grid-layout/GridLayout";
import { useContainerWidth } from "react-grid-layout";
import { useQuery } from "@tanstack/react-query";
import {
  fetchCostAnalysis,
  fetchLatencyDistribution,
  fetchTokenUsage,
} from "../../../services/mockApi";

const Dashboard = () => {
  const {
    chartCategories,
    handleChartSelection,
    handleChartDatas,
    dashboardData,
    handleToast,
  } = useDashboardStore(
    useShallow((state) => ({
      chartCategories: state.chartCategories,
      handleChartSelection: state.handleChartSelection,
      dashboardData: state.chartDatas,
      handleChartDatas: state.handleChartDatas,
      handleToast: state.handleToast,
    })),
  );
  const { open, setOpen } = useCommonDashboardStates();

  const { width, containerRef, mounted } = useContainerWidth();

  const { isLoading: tokenLoading, refetch: tokenRefetch } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokenUsage,
    enabled: false,
  });

  const { isLoading: latencyLoading, refetch: latencyRefetch } = useQuery({
    queryKey: ["latency"],
    queryFn: fetchLatencyDistribution,
    enabled: false,
  });

  const { isLoading: costLoading, refetch: costRefetch } = useQuery({
    queryKey: ["costs"],
    queryFn: fetchCostAnalysis,
    enabled: false,
  });

  const { handleCloseDialog, handleOpenDialog, handleFormSubmission } =
    useHandleCharts({
      chartCategories,
      setOpen,
      tokenRefetch,
      latencyRefetch,
      costRefetch,
      handleChartDatas,
      handleToast,
    });

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex md:flex-row justify-between h-15 md:h-10 bg-primary">
        <h2 className="text-2xl font-semibold">LLM Monitoring Dashboard</h2>
        <CustomButton
          name={"Add Widget"}
          startIcon={<IoIosAdd fontSize={"20px"} color="black" />}
          onClick={handleOpenDialog}
          className="text-black!"
        />
      </div>
      <div
        className=" h-[85vh] md:h-[90vh] overflow-y-scroll no-scrollbar"
        ref={containerRef}
      >
        {mounted && dashboardData?.some((chart) => chart.selected) ? (
          <GridLayout width={width} />
        ) : (
          <div className="flex items-center justify-center h-[90vh]">
            <span className="text-2xl font-bold text-gray-600">
              Add Widget types to visualize the datas
            </span>
          </div>
        )}
      </div>

      {open && (
        <CustomDialog onClose={handleCloseDialog}>
          <>
            <CustomDialog.Header>
              <h2 className="text-xl text-white font-semibold">
                Select Widget Type
              </h2>
            </CustomDialog.Header>

            <CustomDialog.Body>
              <div className="grid grid-cols-2 gap-6">
                {chartCategories?.map((item) => (
                  <CustomBadge
                    name={item.name}
                    key={item.name}
                    onClick={() => [handleChartSelection(item.name)]}
                    className={
                      item.active ? "border-green-700" : "border-red-700"
                    }
                  />
                ))}
              </div>
            </CustomDialog.Body>

            <CustomDialog.Footer>
              <div className="flex gap-2 mt-4">
                <CustomButton
                  name="Cancel"
                  className="bg-transparent  border border-tertiary text-sm font-medium px-2 py-1"
                  onClick={handleCloseDialog}
                />
                <CustomButton
                  onClick={handleFormSubmission}
                  loading={tokenLoading || costLoading || latencyLoading}
                  name="Submit"
                  className={`$text-sm px-2 py-1 ${tokenLoading || costLoading || latencyLoading ? "text-tertiary!" : "text-black!"}`}
                />
              </div>
            </CustomDialog.Footer>
          </>
        </CustomDialog>
      )}
    </div>
  );
};
export default Dashboard;
