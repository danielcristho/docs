import React from "react";

interface AlertProps {
  type?: "caution" | "info" | "success" | "error";
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type = "caution", children }) => {
  const alertStyles = {
    caution: "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-l-4 border-blue-500 text-blue-700",
    success: "bg-green-100 border-l-4 border-green-500 text-green-700",
    error: "bg-red-100 border-l-4 border-red-500 text-red-700",
  };

  return (
    <div className={`${alertStyles[type]} p-4 rounded-md`}>
      <strong className="capitalize">{type}:</strong> {children}
    </div>
  );
};

export default Alert;
