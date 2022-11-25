import React from "react";

const CategoryCard = ({ product, setBookingData }) => {
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
        <img src={image} alt="Brand" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Model : {model}</h2>
        <div className="md:grid grid-cols-2 gap-2 justify-between">
          <p className="text-lg">Seller Name : {sellerName}</p>
          <p className="text-lg">Location : {location}</p>
          <p className="text-lg">Original Price : ${originalPrice}</p>
          <p className="text-lg">Resale Price : ${resalePrice}</p>
          <p className="text-lg">Use : ${use}</p>
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
