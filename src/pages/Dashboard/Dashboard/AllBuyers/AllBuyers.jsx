import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoaderPage from "../../../../Utilities/LoaderPage";

const AllBuyers = () => {
  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://used-laptop-shop.vercel.app/dashboard/all-buyers`
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteBuyer = (id) => {
    fetch(`https://used-laptop-shop.vercel.app/dashboard/all-buyers/${id}`, {
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

  if (isLoading) {
    return <LoaderPage />;
  }
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center my-5">
        All buyers list
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Buyers Id</th>
              <th className="text-lg">Delete Buyer</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <td>{i + 1}</td>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>{buyer._id}</td>
                <td>
                  <button
                    onClick={() => handleDeleteBuyer(buyer._id)}
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

export default AllBuyers;
