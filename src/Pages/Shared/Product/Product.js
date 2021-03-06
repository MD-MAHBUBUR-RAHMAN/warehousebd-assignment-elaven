import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ products }) => {
  const { price, _id, sold, img, quantity, supplier, product, description } =
    products;

  const navigate = useNavigate();
  const productDetailHandle = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="my-5 bg-slate-100 border md:borde-solid rounded-lg mx-auto gap-3">
      <img className="p-5 w-full" src={img} alt="img" />
      <div className="mx-10">
        <p className="text-xl text-sky-500">
          Product : <span className="text-red-400">{product}</span>
        </p>
        <p className="text-xl text-sky-500">
          Supplier : <span className="text-red-400">{supplier}</span>
        </p>
        <p className="text-xl text-sky-500">
          Price : <span className="text-red-400">{price}</span>
        </p>
        <p className="text-xl text-sky-500">
          Quantity : <span className="text-red-400">{quantity}</span>
        </p>
        <p className="text-xl text-sky-500">
          Sold : <span className="text-red-400">{sold}</span>
        </p>
        <p className="font-semibold text-gray-700">{`${description.slice(
          0,
          200
        )} .....`}</p>

        <input
          onClick={() => productDetailHandle(_id)}
          className="block mx-auto bg-slate-700 px-5 py-3 mt-10 mb-5 rounded-md hover:text-blue-400 md:w-36 border-none text-red-400 md:font-semibold"
          type="button"
          value="Update"
        />
      </div>
    </div>
  );
};

export default Product;
