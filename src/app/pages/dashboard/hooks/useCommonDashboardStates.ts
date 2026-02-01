import { useState } from "react";
import type { PrimitiveTypes } from "../../../../types/basicTypes";
import { chartCategory } from "../datas/staticDatas";

//custom hook for common dashboard states
const useCommonDashboardStates = () => {
  const [open, setOpen] = useState<PrimitiveTypes["boolean"]>(false);

  const [chartCategories, setChartCategories] = useState(chartCategory);

  return { open, setOpen, chartCategories, setChartCategories };
};

export { useCommonDashboardStates };
