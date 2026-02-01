import type { QueryObserverResult } from "@tanstack/react-query";
import type {
  CostAnalysisResponse,
  LatencyDistributionResponse,
  TokenUsageResponse,
} from "../../../../services/types/mockApiTypes";
import type {
  ChartCategories,
  UseHandleChartsParams,
} from "../../../types/dashboardTypes";

//custom hook to handle chart selection
const useHandleCharts = ({
  chartCategories,

  setOpen,
  tokenRefetch,
  latencyRefetch,
  costRefetch,
  handleChartDatas,
  handleToast,
}: UseHandleChartsParams) => {
  const selectedApis = {
    token: tokenRefetch,
    latency: latencyRefetch,
    cost: costRefetch,
  };

  //function to close dialog
  const handleCloseDialog = () => {
    setOpen(false);
  };

  //function to open dialog
  const handleOpenDialog = () => {
    setOpen(true);
  };

  //function to handle form submission
  const handleFormSubmission = async () => {
    const selectedCharts = chartCategories?.map((chart: ChartCategories) =>
      selectedApis[chart.id](),
    );

    const [tokenResponse, latencyResponse, costResponse]: QueryObserverResult<
      unknown,
      Error
    >[] = await Promise.all(selectedCharts);

    const token = (tokenResponse?.data as TokenUsageResponse[])?.map(
      (data: TokenUsageResponse) => ({
        field: data.timestamp,
        value: data.tokens,
      }),
    );

    const latency = (
      latencyResponse?.data as LatencyDistributionResponse[]
    )?.map((data: LatencyDistributionResponse) => ({
      field: data.latency_ms,
      value: data.request_count,
    }));

    const cost = (costResponse?.data as CostAnalysisResponse[])?.map(
      (data: CostAnalysisResponse) => ({
        field: data.model_name,
        value: data.cost,
      }),
    );

    const fetchedCharts = {
      token,
      latency,
      cost,
    };

    const activeCategories = chartCategories
      ?.filter((item) => item.active)
      ?.map((chart) => chart.id);
    let chartResponse: any = {};
    activeCategories?.forEach((chart: "token" | "latency" | "cost") => {
      chartResponse![chart] = fetchedCharts[chart];
    });
    handleChartDatas(chartResponse!);
    handleToast({ show: true, message: "Dashboard customized successfully" });
    setOpen(false);
  };
  return {
    handleCloseDialog,
    handleOpenDialog,
    handleFormSubmission,
  };
};

export { useHandleCharts };
