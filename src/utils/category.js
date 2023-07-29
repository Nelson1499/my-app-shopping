import axios from "axios";

let cachedResponse = null;

export const getAllCategory = async () => {
  if (cachedResponse) {
    return cachedResponse;
  } else {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    cachedResponse = response;

    return response;
  }
};
