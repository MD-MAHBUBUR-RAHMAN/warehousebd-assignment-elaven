import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const productReduccedlHandle = () => {
    console.log("click");
  };

  return (
    <div>
      <div className="sm:w-2/4 my-5 bg-slate-100 md:borde-solid rounded-lg mx-auto pb-4 2xl:flex">
        <img
          className="p-5 md:p-8 w-full rounded-3xl"
          src={product?.img}
          alt="img"
        />
        <div className="mx-3 md:mx-10 2xl:pt-10">
          <p className="md:text-xl text-sky-500">
            Product : <span className="text-red-400">{product?.product}</span>
          </p>
          <p className="md:text-xl text-sky-500">
            Supplier : <span className="text-red-400">{product?.supplier}</span>
          </p>
          <p className="md:text-xl text-sky-500">
            Price : <span className="text-red-400">{product?.price}</span>
          </p>
          <p className="md:text-xl text-sky-500">
            Quantity : <span className="text-red-400">{product?.quantity}</span>
          </p>
          <p className="md:text-xl text-sky-500">
            Sold : <span className="text-red-400">{product?.sold}</span>
          </p>
          <p className="md:font-semibold text-gray-700">
            {product.description}
          </p>

          <input
            onClick={() => productReduccedlHandle(id)}
            className="font-bold font-mono bg-sky-400 hover:bg-sky-500 cursor-pointer px-10 py-3 rounded-xl block mx-auto mt-4 mb-4 "
            type="button"
            value="Reduce"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
