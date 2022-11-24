import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const category = useLoaderData();
  const categoryName = category[0].brand;
  console.log(category);

  return (
    <div className="my-20">
      <h3 className="text-3xl font-semibold text-center mb-10">
        {categoryName} Laptop All Products
      </h3>
      <div className="grid md:grid-cols-2 gap-10 ">
        {category.map((product) => (
          <div
            key={product._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={product.image} alt="Brand" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Model : {product.model}</h2>
              <div className="md:grid grid-cols-2 gap-2 justify-between">
                <p className="text-lg">Seller Name : {product.sellerName}</p>
                <p className="text-lg">Location : {product.location}</p>
                <p className="text-lg">
                  Original Price : ${product.originalPrice}
                </p>
                <p className="text-lg">Resale Price : ${product.resalePrice}</p>
                <p className="text-lg">Use : ${product.use}</p>
              </div>
              <div className="card-actions mt-5">
                <button className="btn btn-info w-full">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
