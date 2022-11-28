import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://used-laptop-shop.vercel.app/dashboard/my-orders/${user?.email}`
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  console.log(orders);
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center my-5">My orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Brand</th>
              <th className="text-lg">Model</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Pay</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={order._id}>
                <td>{i + 1}</td>
                <td>{order.email}</td>
                <td>{order.brand}</td>
                <td>{order.model}</td>
                <td>{order.price}</td>
                <td>
                  <button className="btn btn-sm btn-info">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
