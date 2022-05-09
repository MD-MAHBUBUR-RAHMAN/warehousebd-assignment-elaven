import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProduct = () => {
  // import useAuthState to get users:--------
  const [user] = useAuthState(auth);

  // useState used to retain fetch data:-------------
  const [products, setProducts] = useState([]);

  // Load data from api:----------
  useEffect(() => {
    const email = user?.email;
    const url = `https://frozen-crag-58968.herokuapp.com/product?email=${email}`;
    if (email) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    }
  }, [user]);

  // delete items:-----------------
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you Shure To Delete This Product");
    if (proceed) {
      const url = `https://frozen-crag-58968.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div>
      <h5 className="mb-5 text-center text-xl sm:text-4xl text-sky-300 font-extrabold font-mono mt-10">
        Your Products
      </h5>
      <p className="mb-5 text-center sm:text-xl text-red-300 font-bold">
        <span className="text-green-500">Name</span> : {user?.displayName}{" "}
      </p>
      <p className="mb-10 text-center sm:text-xl text-red-300 font-bold">
        <span className="text-green-500">Email Address:</span>{" "}
        {products[0]?.email}
      </p>
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

export default MyProduct;
