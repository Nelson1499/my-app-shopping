import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { getProductPopular } from "../utils/products";
import SellIcon from "@mui/icons-material/Sell";

const CarrouselContainer = () => {
  const [products, setproducts] = useState([]);
  const getproducts = () => {
    getProductPopular()
      .then((res) => setproducts(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <Carousel variant="dark">
      {products.map((product) => (
        <Carousel.Item key={product.id}>
          <h1 className="text-white font-semibold text-xl h-14 mx-2">
            {product.title}
          </h1>
          <div className="relative bg-white w-11/12 py-16 m-auto rounded-lg">
            <img
              src={product.image}
              className="d-block w-60 m-auto h-48"
              alt="..."
            />

            <div className="absolute -top-12 left-44 right-0 bottom-0 flex items-center justify-center">
              <div className="relative">
                <SellIcon
                  className="text-yellow-300"
                  style={{ fontSize: "6rem" }}
                />
                <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
                  ${product.price}
                </h3>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarrouselContainer;
