import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from "react";

import CloseIcon from "@assets/icons/close-circle.svg?react";
import DangerIcon from "@assets/icons/danger.svg?react";
import InfoIcon from "@assets/icons/info-circle.svg?react";
import TickIcon from "@assets/icons/tick-circle2.svg?react";

import { Toast } from "primereact/toast";

type TToastProp = {
  children: ReactNode;
};

type ToastSeverity = "success" | "error" | "info" | "warn";
interface ToastContextType {
  showToast: (severity: ToastSeverity, message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const iconStyle = { width: "1.25rem", height: "1.25rem" };

export const ToastProvider = ({ children }: TToastProp) => {
  const toast = useRef<Toast | null>(null);

  const showToast = useCallback((severity: ToastSeverity, message: string) => {
    let icon = null;

    switch (severity) {
      case "success":
        icon = <TickIcon style={iconStyle} />;
        break;
      case "info":
        icon = <InfoIcon style={iconStyle} />;
        break;
      case "error":
        icon = <DangerIcon style={iconStyle} />;
        break;
      default:
        icon = <InfoIcon style={iconStyle} />;
        break;
    }

    toast.current?.show({
      severity,
      summary: severity.charAt(0).toUpperCase() + severity.slice(1),
      detail: message,
      life: 4500,
      icon,
      closeIcon: <CloseIcon style={iconStyle} />,
    });
  }, []);

  return (
    <ToastContext.Provider value={useMemo(() => ({ showToast }), [showToast])}>
      <Toast
        ref={toast}
        pt={{
          content: {
            className: "shadow-1",
          },
          message: {
            className: "border-round-lg",
          },
          closeButton: {
            className: "p-0 w-auto h-auto",
          },
        }}
      />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
