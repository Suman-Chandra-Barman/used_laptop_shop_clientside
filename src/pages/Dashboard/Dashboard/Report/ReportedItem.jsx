import React from "react";

const ReportedItem = ({ report, handleDeleteReport }) => {
  const { image, model, sellerName, use, time, _id } = report;
  const a = new Date(time);
  const date = a.getFullYear() + "/" + a.getMonth() + "/" + a.getDate();

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Brand" className="h-36 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Model : {model}</h2>
        <div className="md:grid grid-cols-1 gap-1 justify-between">
          <div className="text-base flex gap-2 items-center">
            Seller name :{sellerName}
          </div>
          <p className="text-base">Use : {use} year</p>
          <p className="text-base">Posted date : {date}</p>
        </div>
        <div className="card-actions mt-5">
          <button
            onClick={() => handleDeleteReport(_id)}
            className="btn btn-info w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportedItem;
