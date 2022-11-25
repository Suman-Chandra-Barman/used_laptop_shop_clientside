import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookNowModal = ({ bookingData, setBookingData }) => {
  const { user } = useContext(AuthContext);
  const { brand, resalePrice, model } = bookingData;

  const handleBooking = (e) => {
    e.preventDefault();
    const from = e.target;
    const phone = from.phone.value;
    const location = from.location.value;

    const buyer = {
      name: user.displayName,
      email: user.email,
      phone,
      brand,
      model,
      price: resalePrice,
      MeetLocation: location,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyer),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking successfully");
          from.reset();
          setBookingData(null);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="checkbox" id="book-now-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-center my-5">
            Booking information
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5">
            <input
              name="name"
              type="text"
              value={user.displayName}
              readOnly
              placeholder="Full Name"
              className="input input-bordered w-ful bg-gray-100"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={user.email}
              readOnly
              className="input input-bordered w-ful bg-gray-100"
              required
            />
            <input
              name="brand"
              type="text"
              value={brand}
              readOnly
              className="input input-bordered w-ful bg-gray-100"
            />
            <input
              name="price"
              type="text"
              defaultValue={resalePrice}
              className="input input-bordered w-ful bg-gray-100"
              readOnly
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
              placeholder="Meeting Location"
              className="input input-bordered w-ful"
              required
            />
            <div className="modal-action flex">
              <button className="btn btn-info w-[50%]" type="submit">
                submit
              </button>
              <button
                onClick={() => setBookingData(null)}
                className="btn btn-error w-[50%]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
