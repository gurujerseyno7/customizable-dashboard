import type { ReactElement } from "../../../types/reactTypes";

//type for custom dialog props
type CustomDialogProps = {
  children: ReactElement;
  onClose?: () => void;
};

export type { CustomDialogProps };
