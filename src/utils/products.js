import axios from "axios";

export const getAllProduct = () => {
  return axios.get("https://fakestoreapi.com/products");
};

export const getProductPopular = () => {
  return axios.get("https://fakestoreapi.com/products?limit=5");
};

export const getProductCategory = (props) => {
  return axios.get("https://fakestoreapi.com/products/category/" + props);
};

export const getProduct = (id) => {
  return axios.get("https://fakestoreapi.com/products/" + id);
};
