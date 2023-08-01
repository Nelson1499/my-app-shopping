import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});

export const stripePost = (data) => {
  apiInstance
    .post("/create-checkout-session", data)
    .then((res) => {
      window.location.href = res.data.url;
    })
    .catch((error) => {
      console.error("Error sending request:", error);
    });
};
