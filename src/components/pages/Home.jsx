import React, { useEffect } from "react";
import { getAllProduct } from "../../utils/products";
import CarrouselContainer from "../../containers/CarrouselContainer";
import ProductContainer from "../../containers/ProductContainer";

const Home = () => {
  const getproducts = () => {
    getAllProduct()
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div>
      <CarrouselContainer />
      <ProductContainer />
    </div>
  );
};

export default Home;
