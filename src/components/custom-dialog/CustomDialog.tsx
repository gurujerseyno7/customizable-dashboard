import { IoClose } from "react-icons/io5";
import type { CustomDialogProps } from "./types/customDialogTypes";
import CustomButton from "../custom-button/CustomButton";

const CustomDialog = ({ children, onClose }: CustomDialogProps) => {
  return (
    <div
      id="dialog-backdrop"
      className="fixed flex justify-center items-center inset-0 bg-black/60"
    >
      <div className="relative p-4 w-100 bg-secondary rounded-lg">
        {children}
        <CustomButton
          className="absolute top-2 right-2 h-6 w-6 bg-gray-400! rounded-full! p-0! flex items-center justify-center"
          onClick={onClose}
          startIcon={<IoClose fontSize={"20px"} color="black" />}
        />
      </div>
    </div>
  );
};

const DialogHeader = ({ children }: CustomDialogProps) => {
  return <div className="flex justify-start mb-4 font-bold">{children}</div>;
};

const DialogFooter = ({ children }: CustomDialogProps) => {
  return <div className="flex justify-end gap-2 mt-4">{children}</div>;
};

const DialogBody = ({ children }: CustomDialogProps) => {
  return <div className="flex justify-start">{children}</div>;
};

CustomDialog.Header = DialogHeader;
CustomDialog.Body = DialogBody;
CustomDialog.Footer = DialogFooter;

export default CustomDialog;
