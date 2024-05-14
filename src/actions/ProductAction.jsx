import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const async_getProducts = () => async (dispatch, getState) => {
//   console.log(getState());//it gives global state of store.jsx
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
