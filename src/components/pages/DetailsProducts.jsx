import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/products";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Loading from "../../assets/Loading.gif";
import { useCart } from "../../hooks/useCart";
import { Carousel } from "react-bootstrap";

const DetailsProducts = () => {
  const { cart, addToCart } = useCart();
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [count, setcount] = useState(1);
  const obtainProduct = () => {
    getProduct(id)
      .then((res) => {
        setproduct(res.data);
        setTimeout(() => {
          setisLoading(true);
        }, 3000);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    obtainProduct();
  }, [id]);
  const formatPrice = (price, discount) => {
    const valor = price - (price * discount) / 100;
    return valor.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    });
  };
  return (
    <div className="flex items-center">
      <div className="lg:flex block m-auto container transition-shadow duration-300">
        {isLoading ? (
          <>
            <div className="h-max bg-white rounded-lg w-80 md:w-auto mx-auto">
              <Carousel variant="dark" className=" md:w-96 md:h-80 w-80 py-4 h-72 rounded-lg m-auto" >
                {product.images.map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="rounded w-9/12 h-60 m-auto"
                      src={img}
                      alt="ProductImage"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="text-white container md:w-9/12 m-auto my-5 text-left">
              <h3 className="text-3xl font-semibold">
                Product Name: {product.title}
              </h3>
              <p className="text-2xl font-semibold">
                Description: {product.description}
              </p>
              <p className="text-2xl font-semibold">
                Price: {formatPrice(product.price, product.discountPercentage)}
              </p>
              <div className="flex bg-green-600 w-max p-2 rounded items-center">
                <AddIcon
                  onClick={() => setcount(count + 1)}
                  className="cursor-pointer"
                />
                <div className="bg-white h-max py-1 px-2 mx-2 rounded text-black">
                  {count}
                </div>
                <RemoveIcon
                  onClick={() => {
                    count > 1 && setcount(count - 1);
                  }}
                  className="cursor-pointer"
                />
              </div>
              <button
                onClick={() => addToCart({ product, count })}
                className="w-full mt-10 p-2 rounded bg-green-600 hover:bg-green-500 font-semibold text-xl"
              >
                Add to cart
              </button>
            </div>
          </>
        ) : (
          <img className="w-96 m-auto" src={Loading} alt="loading" />
        )}
      </div>
    </div>
  );
};

export default DetailsProducts;
