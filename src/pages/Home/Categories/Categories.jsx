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
      <h2 className="text-3xl text-center font-semibold my-2">Laptop Brand</h2>
      <div className="">
        <ul className="py-4 flex gap-10 justify-center">
          <Link to={`category/HP`}>Hp Laptop</Link>
          <Link to={`category/Dell`}>Dell Laptop</Link>
          <Link to={`category/Apple`}>Apple Laptop</Link>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
