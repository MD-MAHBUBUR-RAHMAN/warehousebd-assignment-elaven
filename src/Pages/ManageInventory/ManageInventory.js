import React from "react";
import useProducts from "../Hooks/useProducts";

const ManageInventory = () => {
  const [products] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you Shure To Delete This Product");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div className="">
      <h2 className="mb-10 text-center sm:text-4xl text-sky-300 font-extrabold font-mono mt-10">
        Manage Inventories
      </h2>

      <table className="table-auto mx-auto border mb-10">
        <thead className="border">
          <tr className="">
            <th className="">Image</th>
            <th>product</th>
            <th>supplier</th>
            <th className="hidden sm:block">
              <p>Email</p>
            </th>
            <th>Delet</th>
          </tr>
        </thead>
        <tbody className="">
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>
                  <img
                    className="sm:mx-3 sm:my-3"
                    style={{ width: "100px" }}
                    src={product.img}
                    alt=""
                  />
                </td>
                <td>
                  <p className="sm:mr-5 ">{product.product}</p>
                </td>
                <td>
                  <p className="sm:mr-3 ">{product.supplier} </p>
                </td>
                <td className="hidden sm:block">
                  <p className="sm:mr-3 sm:mt-12">{product.email} </p>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="sm:mx-4 p-2 rounded-md bg-slate-700 text-red-400"
                  >
                    Delet
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventory;
