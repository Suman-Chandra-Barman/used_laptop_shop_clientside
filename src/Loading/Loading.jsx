import React from "react";

const Loading = () => {
  return (
    <div class="flex justify-center items-center space-x-2">
      <div
        class="spinner-border animate-spin border-dashed inline-block w-16 h-16 border-4 border-red-500 rounded-full"
        role="status"
      >
        <span class="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Loading;
