import { useShallow } from "zustand/shallow";
import useDashboardStore from "../../store/dashboardStore";
import { IoClose } from "react-icons/io5";
import { useHandleToast } from "./hooks/useHandleToast";

const CustomToast = () => {
  const { message, show, handleToast } = useDashboardStore(
    useShallow((state) => ({
      message: state.toast.message,
      show: state.toast.show,
      handleToast: state.handleToast,
    })),
  );

  const { handleClose } = useHandleToast({ handleToast, show });
  return (
    <>
      {show && (
        <div
          id="toast-top-left"
          className="fixed flex items-center justify-between z-100 w-full max-w-xs p-4 text-body  rounded-2xl bg-secondary rounded-base shadow-xs border border-default top-5 end-5"
          role="alert"
        >
          <div className="text-sm font-normal">{message}</div>
          <IoClose
            fontSize={"20px"}
            color="white"
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>
      )}
    </>
  );
};

export default CustomToast;
