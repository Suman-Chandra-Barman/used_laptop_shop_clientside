import React from "react";
import { useLoaderData } from "react-router-dom";

const Reports = () => {
  const reports = useLoaderData();
  console.log(reports);
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center">All reported items</h3>
      <div></div>
    </div>
  );
};

export default Reports;
