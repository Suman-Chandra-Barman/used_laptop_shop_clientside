import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/dashboard/all-sellers`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteSeller = (id) => {
    fetch(`http://localhost:5000/dashboard/all-sellers/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold text-center my-5">
        All sellers list
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Email</th>
              <th className="text-lg">verified Status</th>
              <th className="text-lg">Delete seller</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <td>{i + 1}</td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Verified</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteSeller(seller._id)}
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
    </div>
  );
};

export default AllSellers;
