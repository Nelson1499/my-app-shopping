import axios from "axios";

export const getAllCategory = () => {
  return axios.get("https://fakestoreapi.com/products/categories");
};
