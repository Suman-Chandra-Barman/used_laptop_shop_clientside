import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ product, setBookingData, handleAddReport }) => {
  const {
    image,
    model,
    sellerName,
    location,
    originalPrice,
    resalePrice,
    use,
  } = product;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Brand" className="h-52 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Model : {model}</h2>
        <div className="md:grid grid-cols-1 gap-1 justify-between">
          <p className="text-base">Seller name : {sellerName}</p>
          <p className="text-base">Location : {location}</p>
          <p className="text-base">Original price : ${originalPrice}</p>
          <p className="text-base">Resale price : ${resalePrice}</p>
          <p className="text-base">Use : {use} year</p>
          <Link
            onClick={() => handleAddReport(product)}
            className="underline text-lg text-error font-semibold"
          >
            Report
          </Link>
        </div>
        <div className="card-actions mt-5">
          <label
            onClick={() => setBookingData(product)}
            htmlFor="book-now-modal"
            className="btn btn-info w-full"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
