import type { DashboardStoreState } from "../../../store/types/dashboardStoreTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for useHandleToast hook
type UseHandleToastTypes = {
  handleToast: DashboardStoreState["handleToast"];
  show: PrimitiveTypes["boolean"];
};

export type { UseHandleToastTypes };
