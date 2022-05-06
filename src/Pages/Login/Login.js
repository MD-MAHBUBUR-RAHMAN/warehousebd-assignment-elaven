import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  // form Submit button:--------------------
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    event.target.reset();
    navigate(from, { replace: true });
  };
  // password Reset:-----------
  const passwordReset = async (event) => {
    const email = emailRef.current.value;
    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      alert("Check Your Email please");
    } else {
      alert("Write your Email please");
    }
  };

  if (loading || sending) {
    return <Loading />;
  }

  let errorElement;
  if (error || resetError) {
    errorElement = (
      <p className="text-red-600 mb-3 text-center">
        Error: {error?.message} {resetError?.message}
      </p>
    );
  }
  return (
    <div className="w-full max-w-4xl mx-auto my-20">
      <h1 className="text-center text-sky-300 text-4xl font-semibold my-5">
        Login Please
      </h1>
      <div className="border p-5 rounded-lg mx-2">
        <form onSubmit={handleLogin}>
          <input
            className="shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
            type="email"
            ref={emailRef}
            id="email"
            required
            placeholder="Your email"
          />
          <input
            className="shadow block mt-10 mb-5 rounded-lg  w-full md:text-xl text-center p-2"
            type="password"
            ref={passwordRef}
            id="password"
            required
            placeholder="Password"
          />
          {errorElement}
          <input
            className="bg-sky-500 hover:bg-sky-700 cursor-pointer block w-1/4 p-2 mx-auto my-10 md:first-line:text-2xl text-white rounded-md"
            type="submit"
            value="LogIn"
          />
          <div className="md:flex justify-center">
            <p className="text-center text-lg text-gray-500 md:font-semibold">
              New On This Site?
            </p>
            <Link
              to="/register"
              className="block text-center text-green-400 ml-3"
            >
              Please Register
            </Link>
          </div>
          <div className="md:flex justify-center">
            <p className="text-center text-lg text-gray-500 md:font-semibold">
              Forget Your Password?
            </p>
            <button
              onClick={passwordReset}
              className="block w-full md:w-36 border-none text-red-400 md:font-semibold "
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Login;
