import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../images/warehouse.png";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  // toggle setting:======
  const [open, setOpen] = useState(false);
  if (loading) {
    return <Loading />;
  }
  return (
    <nav className="flex items-center justify-between  md:justify-around py-5 bg-slate-200">
      <Link to="/home">
        <img className="w-24" src={image} alt="" />
      </Link>
      <ul
        className={`md:flex justify-center p-2  absolute  md:static  duration-700 ease-in ${
          open ? "top-5 pl-10 left-0 bg-slate-200" : "top-5 left-[-200px]"
        }`}
      >
        <li className="mb-2 mr-5 lg:text-xl  hover:text-violet-600 ">
          <Link to="/home">Home</Link>
        </li>
        <li className="mb-2 mr-5 lg:text-xl hover:text-violet-600">
          <Link to="/blog">Blog</Link>
        </li>

        {user ? (
          <>
            <li className="mb-2 mr-5 lg:text-xl hover:text-violet-600">
              <Link to="/addproduct">Add Items</Link>
            </li>
            <li className="mb-2 mr-5 lg:text-xl hover:text-violet-600">
              <Link to="/myproduct">My Product</Link>
            </li>
            <li className="mb-2 mr-5 lg:text-xl hover:text-violet-600">
              <Link to="/manage">Manage Items</Link>
            </li>
            <li>
              <button
                onClick={handleSignOut}
                className="mr-5 lg:text-xl hover:text-violet-600"
              >
                SignOut
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              className="mr-10 lg:text-xl hover:text-violet-600"
              to="/login"
            >
              LOGIN
            </Link>
          </li>
        )}
      </ul>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <XIcon className="h-12 w-12 text-blue-500 mr-4" />
        ) : (
          <MenuIcon className="h-12 w-12 text-blue-500 mr-4" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
