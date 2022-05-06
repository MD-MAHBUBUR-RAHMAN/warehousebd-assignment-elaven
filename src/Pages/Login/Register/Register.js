import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    event.target.reset();
    navigate("/");
  };

  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-red-600 mb-3 text-center">
        Error: {error?.message} {error1?.message}{" "}
      </p>
    );
  }

  if (loading || updating) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-20">
      <h1 className="text-center text-sky-300 text-4xl font-semibold my-5">
        Register Please
      </h1>
      <div className="border p-5 rounded-lg mx-2">
        <form onSubmit={handleRegister}>
          <input
            className="shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your Name"
          />
          <input
            className="shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your email"
          />
          <input
            className="shadow block mt-10 mb-5 rounded-lg  w-full md:text-xl text-center p-2"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
          />
          <input
            className="bg-sky-500 hover:bg-sky-700 cursor-pointer block w-1/4 p-2 mx-auto my-10 md:first-line:text-2xl text-white rounded-md"
            type="submit"
            value="Register"
          />
        </form>
        {errorElement}
        <div className="md:flex justify-center">
          <p className="text-center text-lg text-gray-500 md:font-semibold">
            Already Have An Account?
          </p>
          <Link to="/login" className="block text-center text-green-400 ml-3">
            Please LogIn
          </Link>
        </div>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Register;
