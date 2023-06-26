import React, { useEffect, useState } from "react";
import { getAllProduct } from "../utils/products";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductContainer = () => {
  const [products, setproducts] = useState([]);
  const history = useHistory();
  const getAllProducts = () => {
    getAllProduct()
      .then((res) => setproducts(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const navigate = (path) => {
    history.push(path);
  };
  return (
    <div className="flex flex-col mx-1 my-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 transition-shadow ">
        {products.map((product) => (
          <div key={product.id} className="flex-col flex">
            <div className="border-2 border-slate-700 items-center py-2 bg-white rounded-lg">
              <img
                className="md:w-40 md:h-40  w-28 h-28 m-auto"
                src={product.image}
                alt="product"
              />
              <h3 className="text-base font-semibold p-0 m-0">Product name:</h3>
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
    </div>
  );
};

export default ProductContainer;
