import React, { useEffect, useState } from "react";
import BookNowModal from "../Categories/BookNowModal";
import AdvertiseItem from "./AdvertiseItem";

const Advertise = () => {
  const [advertise, setAdvertise] = useState([]);
  const [bookingData, setBookingData] = useState(null);
  useEffect(() => {
    fetch("https://used-laptop-shop.vercel.app/advertise")
      .then((res) => res.json())
      .then((data) => {
        setAdvertise(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {advertise.length && (
        <>
          <div className="mb-20">
            <h1 className="text-3xl text-center font-bold my-5">Advertise</h1>
            <div className="grid md:grid-cols-3 gap-7">
              {advertise.map((ad) => (
                <AdvertiseItem
                  key={ad._id}
                  product={ad}
                  setBookingData={setBookingData}
                />
              ))}
            </div>
          </div>
          {bookingData && (
            <BookNowModal
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
          )}
        </>
      )}
    </>
  );
};

export default Advertise;
