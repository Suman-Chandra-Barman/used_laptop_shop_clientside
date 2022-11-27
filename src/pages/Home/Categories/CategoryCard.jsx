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
    time,
    verified,
  } = product;
  const a = new Date(time);
  const date = a.getFullYear() + "/" + a.getMonth() + "/" + a.getDate();
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Brand" className="h-52 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Model : {model}</h2>
        <div className="md:grid grid-cols-1 gap-1 justify-between">
          <div className="text-base flex gap-2 items-center">
            Seller name :
            {verified && (
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            )}
            {sellerName}
          </div>
          <p className="text-base">Location : {location}</p>
          <p className="text-base">Original price : ${originalPrice}</p>
          <p className="text-base">Resale price : ${resalePrice}</p>
          <p className="text-base">Use : {use} year</p>
          <p className="text-base">Posted date : {date}</p>
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
