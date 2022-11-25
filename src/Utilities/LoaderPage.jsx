import React from "react";

const LoaderPage = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div
        className="spinner-border animate-spin border-dashed inline-block w-16 h-16 border-4 border-red-500 rounded-full"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default LoaderPage;
