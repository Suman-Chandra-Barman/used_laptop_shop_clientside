import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="rounded-2xl my-20">
      <h2 className="text-3xl text-center font-bold my-2">Laptop Brands</h2>
      <div className="">
        <ul className="py-4 grid grid-cols-1 gap-2 md:grid-cols-3 text-center md:gap-8 justify-center">
          <Link
            className="bg-slate-500 py-3 px-5 font-semibold hover:bg-slate-700 text-white"
            to={`category/HP`}
          >
            Hp Laptop
          </Link>
          <Link
            className="bg-slate-500 py-3 px-5 font-semibold hover:bg-slate-700 text-white"
            to={`category/Dell`}
          >
            Dell Laptop
          </Link>
          <Link
            className="bg-slate-500 py-3 px-5 font-semibold hover:bg-slate-700 text-white"
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
