import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className=" py-10 bg-slate-800 w-full">
      <h6 className="text-white text-center">
        <small>copyright &copy; {year} </small>
      </h6>
    </div>
  );
};

export default Footer;
