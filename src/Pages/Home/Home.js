import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner/Banner";
import Inventories from "./Inventories/Inventories";
import Values from "./Values/Values";
import Why from "./Why/Why";

const Home = () => {
  const navigate = useNavigate();
  const handleToDetail = () => {
    navigate("/manage");
  };
  return (
    <div>
      <Banner />
      <Why />
      <Inventories />
      <Values />
      <button
        onClick={handleToDetail}
        className="font-bold font-mono bg-sky-400 hover:bg-sky-500 px-10 py-3 rounded-xl block mx-auto mt-4 mb-4 "
      >
        Manage Inventory
      </button>
    </div>
  );
};

export default Home;
