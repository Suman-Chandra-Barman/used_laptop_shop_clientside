import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleRegister = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSignUpError("");
        reset();
        const userInfo = {
          displayName: data.name,
        };
        // user profile update
        updateUserProfile(user, userInfo)
          .then(() => {
            userStore(data.name, data.email, data.account);
          })
          .catch((error) => {
            console.log(error);
            setSignUpError(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userStore = (name, email, account) => {
    const user = { name, email, account };
    console.log("user", user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          navigate(from, { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center text-black my-20">
      <div className="w-[450px] rounded-2xl shadow-xl p-7">
        <h3 className="text-2xl text-center">Register Now</h3>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input input-bordered w-full border-gray-400"
            />
            {errors.name && errors.name?.type === "required" && (
              <p className="text-error">Name is required</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email address is required" })}
              className="input input-bordered w-full border-gray-400"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message: "Please provide stronger password",
                },
              })}
              type="password"
              className="input input-bordered w-full border-gray-400"
              autoComplete="true"
            />
            {errors.password && (
              <p className="text-error">{errors.password.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Account Category?</span>
            </label>
            <select
              className="select select-bordered"
              {...register("account", {
                required: "Account category is required",
              })}
            >
              <option value="buyer" defaultValue="buyer">
                Buyer
              </option>
              <option value="seller">Seller</option>
            </select>
            {errors.role && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          {signUpError && <p className="text-error">{signUpError}</p>}
          <input
            className="btn btn-info w-full mt-3"
            type="submit"
            value="Register"
          />
        </form>
        <div>
          <p className="text-sm mt-3">
            Already, have an account? Please{" "}
            <Link className="text-info" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
