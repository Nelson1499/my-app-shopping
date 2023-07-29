import React, { useEffect, useState } from "react";
import { getAllProduct } from "../utils/products";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../assets/Loading.gif";

const ProductContainer = () => {
  const [products, setproducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const history = useHistory();
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
  const navigate = (path) => {
    history.push(path);
  };
  return (
    <div className="flex flex-col mx-1 my-5 transition-shadow duration-300">
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {products.map((product) => (
            <div key={product.id} className="flex-col flex">
              <div className="border-2 border-slate-700 items-center py-2 bg-white rounded-lg">
                <img
                  className="md:w-40 md:h-40  w-28 h-28 m-auto"
                  src={product.thumbnail}
                  alt="product"
                />
                <h3 className="text-base font-semibold p-0 m-0">
                  Product name:
                </h3>
                <h3 className="font-semibold p-0 m-0 truncate cursor-pointer hover:whitespace-normal text-base mx-2 transition-all">
                  {product.title}
                </h3>
                <h3 className="text-base font-semibold p-1 m-0">
                  Price: U$ {product.price}
                </h3>
                <button
                  onClick={() => navigate(`/details/${product.id}`)}
                  className="bg-emerald-500 hover:bg-emerald-300 text-lg font-bold rounded-lg p-1 w-3/4"
                >
                  See Product
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <img className="w-96 m-auto" src={Loading} alt="loading"/>
      )}
    </div>
  );
};

export default ProductContainer;
