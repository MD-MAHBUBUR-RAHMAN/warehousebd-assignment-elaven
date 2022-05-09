import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
      });
  };

  return (
    <div className="md:w-3/4 xl:w-1/2 mx-auto">
      <h5 className="text-center text-sky-400 text-2xl font-mono font-semibold mt-10 ">
        Add Items
      </h5>
      <form
        className="flex flex-col border p-5 rounded-lg mx-2 my-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-2 text-center shadow block my-5 rounded-lg w-full md:text-xl  p-2"
          placeholder="Name"
          {...register("supplier", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2 text-center shadow block my-5 rounded-lg w-full md:text-xl  p-2"
          placeholder="Product Name"
          {...register("product", { required: true })}
        />
        <input
          className="mb-2 text-center shadow block my-5 rounded-lg w-full md:text-xl  p-2"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <textarea
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="Description"
          {...register("description", { required: true })}
        />

        <input
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="Image Url"
          type="text"
          {...register("img", { required: true })}
        />
        <input
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="Quentity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <input
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="Sold"
          type="number"
          {...register("sold", { required: true })}
        />
        <input
          className="block mx-auto bg-slate-700 px-5 py-3 mt-10 mb-5 rounded-md hover:text-blue-400 md:w-36 border-none text-red-400 md:font-semibold "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
