import React from "react";

const Toast = ({ toastMessage, toastVariant }) => {
  return (
    <div className="toast toast-end fixed bottom-[10vh]">
      <div className={`alert ${toastVariant}`}>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

export default Toast;
