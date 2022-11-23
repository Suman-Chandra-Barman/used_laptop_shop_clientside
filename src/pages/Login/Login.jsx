import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState(" ");

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center text-black my-20">
      <div className="w-[450px] rounded-2xl shadow-xl p-7">
        <h3 className="text-2xl text-center">Please Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: 6,
              })}
              className="input input-bordered w-full border-gray-400"
              autoComplete="true"
            />
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-error">Password must be 6 characters</span>
            )}
            {loginError && <p className="text-error">{loginError}</p>}
            <label className="label">
              <span className="label-text-alt text-black">
                Forgot Password ?
              </span>
            </label>
          </div>
          <input className="btn btn-info w-full" type="submit" value="Login" />
        </form>
        <div>
          <p className="text-sm mt-3">
            Don't have an account?{" "}
            <Link className="text-info" to="/register">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full btn-info">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
