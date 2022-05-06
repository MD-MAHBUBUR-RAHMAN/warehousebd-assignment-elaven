import React, { useEffect, useState } from "react";
import Product from "../../Shared/Product/Product";

const Inventories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-3/4 mx-auto mt-20">
      <h1 className="mb-10 text-center sm:text-4xl text-sky-300 font-extrabold font-mono">
        All Inventories{" "}
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product._id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default Inventories;
