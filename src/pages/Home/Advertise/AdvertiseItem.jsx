import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const AdvertiseItem = ({ product, setBookingData }) => {
  const { user } = useContext(AuthContext);
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
          <p className="text-base">
            Seller Name :{" "}
            {verified && (
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            )}{" "}
            {sellerName}
          </p>
          <p className="text-base">Location : {location}</p>
          <p className="text-base">Original Price : ${originalPrice}</p>
          <p className="text-base">Resale Price : ${resalePrice}</p>
          <p className="text-base">Use : {use} year</p>
          <p className="text-base">Posted date : {date}</p>
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

export default AdvertiseItem;
