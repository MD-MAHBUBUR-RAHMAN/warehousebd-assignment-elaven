import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner flex items-center justify-center text-center">
      <div className="bg-black bg-opacity-40 p-4 w-full">
        <h1 className="text-red-400 text-4xl m-4">Warehouse BD </h1>
        <p className="md:text-2xl text-white m-4">
          We involve receiving and processing shipments and storing stock and
          materials. Other positions involve picking and filling or packing and
          shipping a variety of shipments or orders.
        </p>
      </div>
    </div>
  );
};

export default Banner;
