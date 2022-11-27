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
    <div className="bg-stone-100 py-10 rounded-2xl my-20">
      <h2 className="text-3xl text-center font-bold my-2">Laptop Brands</h2>
      <div className="">
        <ul className="py-4 flex gap-8 justify-center">
          <Link
            className="bg-slate-300 py-3 px-5 font-semibold hover:bg-slate-500 hover:text-white"
            to={`category/HP`}
          >
            Hp Laptop
          </Link>
          <Link
            className="bg-slate-300 py-3 px-5 font-semibold hover:bg-slate-500 hover:text-white"
            to={`category/Dell`}
          >
            Dell Laptop
          </Link>
          <Link
            className="bg-slate-300 py-3 px-5 font-semibold hover:bg-slate-500 hover:text-white"
            to={`category/Apple`}
          >
            Apple Laptop
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
