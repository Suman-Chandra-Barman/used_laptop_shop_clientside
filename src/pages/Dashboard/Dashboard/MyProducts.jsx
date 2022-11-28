import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    fetch(
      `https://used-laptop-shop.vercel.app/seller/products?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [user?.email, isDelete]);

  const handleDeleteProduct = (id) => {
    fetch(`https://used-laptop-shop.vercel.app/category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data);
          setIsDelete(true);
        }
      })
      .catch((error) => console.log(error));
  };
  const handleAdvertise = (product) => {
    const advertise = {
      email: product.sellerEmail,
      model: product.model,
      productId: product._id,
    };

    fetch("https://used-laptop-shop.vercel.app/advertise", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(advertise),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            <th>Status </th>
            <th>Advertise</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product._id}>
              <td>{i + 1}</td>
              <td>{product.brand}</td>
              <td>{product.model}</td>
              <td>{product.resalePrice}</td>
              <td>Available</td>
              <td>
                <button
                  onClick={() => handleAdvertise(product)}
                  className="btn btn-sm btn-info"
                >
                  Advertise
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteProduct(product._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
