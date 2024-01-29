import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { getProductPopular } from "../utils/products";
import SellIcon from "@mui/icons-material/Sell";
import { Discount } from "../svg/discount ";

const CarouselContainer = () => {
  const [products, setproducts] = useState([]);
  const getproducts = () => {
    getProductPopular()
      .then((res) => setproducts(res.data.products))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <article className="items-center justify-center">
      <Carousel
        variant="dark"
        className="m-auto rounded-lg bg-white w-[90%] py-2"
      >
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <h1 className="font-semibold text-xl mx-2">{product.title}</h1>
            <div className="relative m-auto items-center justify-center">
              <img
                src={product.thumbnail}
                className="d-block w-60 h-60 m-auto"
                alt="..."
              />

              <div className="absolute top-0 right-8 md:right-28 items-center justify-center">
                <div className="relative">
                  {/* <SellIcon
                    className="text-red-700"
                    style={{ fontSize: "6rem" }}
                  /> */}
                  <Discount />
                  <h3 className="text-black text-2xl font-bold">
                    {product.discountPercentage}%
                  </h3>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </article>
  );
};

export default CarouselContainer;
