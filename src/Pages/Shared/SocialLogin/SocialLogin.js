import React, { useEffect } from "react";
import google from "../../../images/GoogleLogo.svg.png";
import Github from "../../../images/github.webp";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  useEffect(() => {
    if (user || user1) {
      navigate(from, { replace: true });
    }
  }, [user, user1, from, navigate]);

  let errorElement;
  if (loading || loading1) {
    return <Loading />;
  }
  if (error || error1) {
    errorElement = (
      <p className="text-red-400 text-center my-5">
        Error: {error?.message}
        {error1?.message}
      </p>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <div style={{ height: "1px" }} className="bg-blue-400 w-1/4 "></div>
        <p className="px-5 text-xl font-bold text-sky-500">or</p>
        <div style={{ height: "1px" }} className="bg-blue-400 w-1/4 "></div>
      </div>
      <div>
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className="bg-sky-500 sm:w-1/4 mx-auto my-3 flex justify-center p-2 rounded-xl"
        >
          <img className="w-5 md:mr-3 mt-1" src={google} alt="" />
          <span className="md:text-xl text-gray-100">Google Sign-in</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="bg-sky-500 sm:w-1/4 mx-auto my-5 flex justify-center p-2 rounded-xl"
        >
          <img className="w-5 md:mr-3 mt-1" src={Github} alt="" />
          <span className="md:text-xl text-gray-100">Github Sign-in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
