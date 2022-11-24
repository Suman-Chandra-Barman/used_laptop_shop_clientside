import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  // const [brands, setBrands] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/category")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //       setBrands(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <div className="py-20">
      <h2 className="text-2xl text-center">Laptop Brands {}</h2>
      <div className="flex gap-10 justify-center">
        <Link to={`category/HP`}>Hp Laptops</Link>
        <Link to={`category/Dell`}>Dell Laptops</Link>
        <Link to={`category/Apple`}>Apple Laptops</Link>
      </div>
    </div>
  );
};

export default Categories;
