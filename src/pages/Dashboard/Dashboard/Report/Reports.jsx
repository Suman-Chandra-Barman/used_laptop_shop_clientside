import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReportedItem from "./ReportedItem";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    fetch("https://used-laptop-shop.vercel.app/dashboard/reports")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReports(data);
      })
      .catch((error) => console.log(error));
  }, [isDelete]);
  console.log(reports);
  const handleDeleteReport = (id) => {
    fetch(`https://used-laptop-shop.vercel.app/dashboard/reports/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Reported item delete");
          setIsDelete(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold text-center mb-8 mt-3">
        All reported items
      </h3>
      <div className="md:grid grid-cols-3 gap-5">
        {reports.map((report) => (
          <ReportedItem
            key={report._id}
            report={report}
            handleDeleteReport={handleDeleteReport}
          />
        ))}
      </div>
    </div>
  );
};

export default Reports;
