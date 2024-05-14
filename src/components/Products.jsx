import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { async_getProducts } from "../actions/ProductAction";

function Products() {
  const { products } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(async_getProducts());
  }, []);

  return (
    <div className="w-full h-auto flex items-center justify-center py-5">
      <div className=" h-auto w-1/2  bg-black text-white border px-5 py-5  ">
        <h1 className="font-semibold text-center text-4xl py-5 text-blue-400">
          Product List
        </h1>
        <ul className="text-lg lowercase ">
          {products && products.map((elem)=>(
            <li key={elem.id} className="flex items-center mt-2">
            <h1 className="w-3/4"> {elem.title}</h1>{" "}
            <div className="flex gap-5 ">
              <span
                className="text-red-700 font-extrabold cursor-pointer border-2 px-2"
                onClick={() => deleteHandler(index)}
              >
                🗙
              </span>
              <span
                className="text-green-400 font-extrabold cursor-pointer border-2 px-2"
                onClick={() => updateHandler(elem.id)}
              >
                🖉
              </span>
            </div>
          </li>
          ))}
        </ul>
        <button
          className="mt-5 px-2 py-1 bg-white text-black text-lg"
          onClick={() => createHandler(prompt("enter user name"))}
        >
          Add Users
        </button>
      </div>
    </div>
  );
}

export default Products;
