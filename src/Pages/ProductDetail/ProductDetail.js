import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // console.log(product);
  useEffect(() => {
    const url = `https://frozen-crag-58968.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const productReduccedlHandle = (product) => {
    // const deliverwdQuantity = product.quantity;
    // // const updatedQuantity = {deliverwdQuantity}
    console.log(product);
    // console.log(product);

    // const url = `http://localhost:5000/product/${id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
  };

  const handleToDetail = () => {
    navigate("/manage");
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
            className="block mx-auto bg-slate-700 px-5 py-3 mt-10 mb-5 rounded-md hover:text-blue-400 md:w-36 border-none text-red-400 md:font-semibold"
            type="button"
            value="DELIVERED"
          />
        </div>
      </div>
      <button
        onClick={handleToDetail}
        className="block mx-auto bg-slate-700 px-5 py-3 mt-10 mb-5 rounded-md hover:text-blue-400 md:w-36 border-none text-red-400 md:font-semibold "
      >
        Manage Inventory
      </button>
    </div>
  );
};

export default ProductDetail;
