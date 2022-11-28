import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import BookNowModal from "./BookNowModal";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const category = useLoaderData();
  const [bookingData, setBookingData] = useState(null);

  const categoryName = category[0].brand;
  console.log(bookingData);

  const handleAddReport = (reportedProduct) => {
    fetch("https://used-laptop-shop.vercel.app/dashboard/reports", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          toast.success("Report add successfully");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-20">
      <h3 className="text-3xl font-semibold text-center mb-10">
        {categoryName} Laptops
      </h3>
      <div className="grid md:grid-cols-3 gap-7 ">
        {category.map((product) => (
          <CategoryCard
            key={product._id}
            product={product}
            setBookingData={setBookingData}
            handleAddReport={handleAddReport}
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
