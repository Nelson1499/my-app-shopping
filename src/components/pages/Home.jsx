import React, { useEffect, useState } from "react";
import ProductContainer from "../../containers/ProductContainer";
import CarouselContainer from "../../containers/Carousel";
import { getAllProduct } from "../../utils/products";
import Loading from "../../assets/Loading.gif";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const getAllProducts = () => {
    getAllProduct()
      .then((res) => {
        setproducts(res.data.products);
        setTimeout(() => {
          setisLoading(true);
        }, 3000);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div className={`${isLoading ? "block" : "hidden"}`}>
        <CarouselContainer />
      </div>
      {isLoading ? (
        <ProductContainer products={products} />
      ) : (
        <img className="w-96 m-auto" src={Loading} alt="loading" />
      )}
    </>
  );
};

export default Home;
