import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const { emailLogin, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(" ");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    // email login
    emailLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginError("");
        toast.success("Login successful!");
        reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        userStore(user.displayName, user.email);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };

  const userStore = (name, email) => {
    const user = { name, email, account: "buyer" };
    console.log("user", user);
    fetch("https://used-laptop-shop.vercel.app/users", {
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
        }
      })
      .catch((err) => console.log(err));
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
          </div>
          <input
            className="btn btn-info w-full mt-3"
            type="submit"
            value="Login"
          />
        </form>
        <div>
          <p className="text-sm mt-3">
            Don't have an account?{" "}
            <Link className="text-info" to="/register">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full btn-info"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
