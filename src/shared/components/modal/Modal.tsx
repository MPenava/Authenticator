import { ReactNode } from "react";

import { Dialog } from "primereact/dialog";

type TModalProps = {
  visible: boolean;
  onHide: () => void;
  title: ReactNode;
  width: string;
  reducedHeaderPadding?: boolean;
  isCentered?: boolean;
  content?: JSX.Element;
  actionComponent?: JSX.Element;
};

const Modal = ({
  visible,
  onHide,
  title,
  width,
  reducedHeaderPadding,
  isCentered,
  content,
  actionComponent,
}: TModalProps) => {
  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header={title}
      footer={actionComponent}
      closable={false}
      draggable={false}
      pt={{
        root: { style: { width }, className: "shadow-2" },
        header: {
          style: {
            textAlign: isCentered ? "center" : "left",
            paddingTop: "2.5rem",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            paddingBottom: reducedHeaderPadding ? "1rem" : "2.5rem",
          },
          className: "border-bottom-none border-round-top-lg",
        },
        content: { style: { padding: "0 2.5rem" } },
        footer: {
          style: { padding: "2.5rem" },
          className: "border-top-none border-round-bottom-lg",
        },
      }}
    >
      {content}
    </Dialog>
  );
};

export { Modal };
