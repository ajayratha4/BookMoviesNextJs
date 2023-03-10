"use client";

import React from "react";

interface Props {
  open: boolean;
  handleClose?: () => void;
  children?: React.ReactNode;
}
const Modal = ({ open, handleClose, children }: Props) => {
  return open ? (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleClose && handleClose();
      }}
      className="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-400 bg-opacity-70 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="w-full h-full flex items-center justify-center "
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
