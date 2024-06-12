import { MouseEvent, ReactNode } from "react";

import { Button as PrimeButton } from "primereact/button";

type TButtonProps = {
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  variant?: "default" | "text" | "outlined" | "link" | "tableIcon";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  rootClassname?: string;
  rootStyle?: string;
  labelClassname?: string;
};

const Button = ({
  label,
  icon,
  variant = "default",
  disabled = false,
  onClick,
  rootClassname,
  rootStyle,
  labelClassname,
}: TButtonProps) => {
  return (
    <PrimeButton
      label={label}
      icon={icon}
      disabled={disabled}
      outlined={variant === "outlined"}
      text={variant === "text" || variant === "tableIcon"}
      link={variant === "link"}
      onClick={onClick}
      pt={{
        root: {
          className: `overflow-visible ${
            variant !== "text" &&
            variant !== "link" &&
            variant !== "tableIcon" &&
            "h-3rem"
          } 
          ${variant === "link" && "p-0"}  
          ${rootClassname} 
          ${
            disabled
              ? "bg-bluegray-100 border-bluegray-100 text-bluegray-200"
              : ""
          }`,
          style: {
            rootStyle,
            ...(variant === "text" && {
              height: "1.5rem",
              width: "min-content",
            }),
            ...(variant === "tableIcon" && {
              height: "20px",
              width: "20px",
            }),
          },
        },
        label: {
          className: `text-lg font-semibold white-space-nowrap ${labelClassname} ${
            variant === "link" ? "text-bluegray-500" : ""
          } ${
            icon && variant !== "text" && variant !== "tableIcon" ? "pl-3" : ""
          }`,
        },
      }}
    />
  );
};

export { Button };
