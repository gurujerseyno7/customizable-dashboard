//custom hook to handle message toast
import { useEffect } from "react";
import type { UseHandleToastTypes } from "../types/customToastTypes";
import type { PrimitiveTypes } from "../../../types/basicTypes";

const useHandleToast = ({ handleToast, show }: UseHandleToastTypes) => {
  const handleClose = () => {
    handleToast({ show: false });
  };

  useEffect(() => {
    let clearToast: PrimitiveTypes["number"];
    if (show) {
      clearToast = setTimeout(() => {
        handleClose();
      }, 2000);
    }

    return () => {
      clearInterval(clearToast);
    };
  }, [show]);

  return { handleClose };
};

export { useHandleToast };
