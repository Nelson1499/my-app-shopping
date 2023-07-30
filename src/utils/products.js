import axios from "axios";

export const getAllProduct = () => {
  return axios.get("https://dummyjson.com/products");
};

export const getProductPopular = () => {
  return axios.get("https://dummyjson.com/products?limit=10");
};

export const getProductCategory = (category) => {
  return axios.get("https://dummyjson.com/products/category/" + category);
};

export const getProduct = (id) => {
  return axios.get("https://dummyjson.com/products/" + id);
};
