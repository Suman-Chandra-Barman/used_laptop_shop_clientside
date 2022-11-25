import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [sellerUser, setSellerUser] = useState({});
  const [isSellerLoading, setSellerIsLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSellerUser(data);
          setSellerIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [email, isSellerLoading]);
  return [sellerUser, isSellerLoading];
};

export default useSeller;
