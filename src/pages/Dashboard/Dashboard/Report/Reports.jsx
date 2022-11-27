import React from "react";
import { useLoaderData } from "react-router-dom";

const Reports = () => {
  const reports = useLoaderData();
  return <div>report{reports.length}</div>;
};

export default Reports;
