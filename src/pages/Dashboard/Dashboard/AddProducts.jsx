import React from "react";
import toast from "react-hot-toast";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const model = form.model.value;
    const year = form.year.value;
    const condition = form.condition.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const description = form.description.value;

    const product = {
      name,
      brand,
      model,
      condition,
      purchaseYear: year,
      price,
      phone,
      location,
      description,
    };

    fetch("http://localhost:5000/dashboard/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product add successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="p-5 md:px-10 md:w-2/3">
      <h2 className="text-3xl font-semibold text-center mb-5">
        Laptop information
      </h2>
      <form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-2">
        <input
          name="name"
          type="text"
          placeholder="Product Name"
          className="input input-bordered w-ful"
          required
        />
        <input
          name="brand"
          type="brand"
          placeholder="Brand Name"
          className="input input-bordered w-ful"
          required
        />
        <input
          name="model"
          type="text"
          className="input input-bordered w-ful"
          placeholder="Model No."
          required
        />
        <input
          name="year"
          type="year"
          className="input input-bordered w-ful"
          placeholder="Year of purchase"
          required
        />
        <select
          name="condition"
          className="select select-bordered w-full text-slate-500"
          required
        >
          <option disabled selected>
            Product Condition?
          </option>
          <option>Excellent </option>
          <option defaultValue="Good">Good</option>
          <option>Fair</option>
        </select>
        <input
          name="price"
          type="text"
          className="input input-bordered w-ful"
          placeholder="$Price"
          required
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          className="input input-bordered w-ful"
          required
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          className="input input-bordered w-ful"
          required
        />
        <textarea
          name="description"
          className="textarea textarea-bordered"
          placeholder="Product Description"
          required
        ></textarea>
        <div className="modal-action">
          <button className="btn btn-info w-full" type="submit">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
