import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const imgApi = process.env.REACT_APP_IMAGEBB_API;
  console.log("api", imgApi);

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.files[0];
    const brand = form.brand.value;
    const model = form.model.value;
    const year = form.year.value;
    const condition = form.condition.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const description = form.description.value;

    const fromData = new FormData();
    fromData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
    fetch(url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const product = {
            sellerName: user.displayName,
            sellerEmail: user.email,
            time: new Date(),
            brand,
            image: imageData.data.url,
            model,
            condition,
            use: year,
            originalPrice,
            resalePrice,
            phone,
            location,
            description,
            verified: user.emailVerified,
          };
          fetch("http://localhost:5000/category", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Product added successfully");
                form.reset();
                navigate("/dashboard/my-products");
              }
            })
            .catch((error) => console.log(error));
        }
      });
  };
  return (
    <div className="p-2">
      <h2 className="text-3xl font-semibold text-center mb-5">
        Laptop information
      </h2>
      <form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-2">
        <div className="grid grid-cols-2 gap-2">
          <select
            name="brand"
            className="select select-bordered w-full text-slate-500"
            required
          >
            <option disabled selected>
              Brand Name?
            </option>
            <option defaultValue="HP">HP</option>
            <option>Dell</option>
            <option>Apple</option>
          </select>

          <input
            name="model"
            type="text"
            className="input input-bordered w-ful"
            placeholder="Model No."
            required
          />
          <input
            name="image"
            type="file"
            className="input input-bordered w-ful"
          />
          <input
            name="year"
            type="text"
            className="input input-bordered w-ful"
            placeholder="Years Of Use"
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
            name="originalPrice"
            type="text"
            className="input input-bordered w-ful"
            placeholder="$Original Price"
            required
          />
          <input
            name="resalePrice"
            type="text"
            className="input input-bordered w-ful"
            placeholder="$Sale Price"
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
        </div>
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
