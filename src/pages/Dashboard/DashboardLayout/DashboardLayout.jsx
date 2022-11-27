import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useSeller from "../../../hooks/useSeller";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [sellerUser] = useSeller(user?.email);
  console.log(sellerUser);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile mt-10">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content flex flex-col">
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 gap-2">
            {sellerUser?.account === "buyer" && (
              <>
                <li>
                  <Link to="/my-orders">My orders</Link>
                </li>
              </>
            )}
            {sellerUser?.account === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/add-products">Add A product </Link>
                </li>
                <li>
                  <Link to="/dashboard/my-products">My Products</Link>
                </li>
              </>
            )}
            {sellerUser?.account === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/all-sellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-buyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reports">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
