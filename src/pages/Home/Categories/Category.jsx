import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookNowModal from "./BookNowModal";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const category = useLoaderData();
  const [bookingData, setBookingData] = useState(null);

  const categoryName = category[0].brand;
  console.log(bookingData);

  return (
    <div className="my-20">
      <h3 className="text-3xl font-semibold text-center mb-10">
        {categoryName} Laptop All Products
      </h3>
      <div className="grid md:grid-cols-2 gap-10 ">
        {category.map((product) => (
          <CategoryCard
            key={product._id}
            product={product}
            setBookingData={setBookingData}
          />
        ))}
      </div>
      {bookingData && (
        <BookNowModal
          bookingData={bookingData}
          setBookingData={setBookingData}
        />
      )}
    </div>
  );
};

export default Category;
