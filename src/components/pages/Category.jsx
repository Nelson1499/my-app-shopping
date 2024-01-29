import React, { useEffect, useState } from "react";
import { getAllProduct, getProductCategory } from "../../utils/products";
import NavbarCategory from "../common/NavbarCategory";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../../assets/Loading.gif";

const Category = () => {
  const [products, setproducts] = useState([]);
  const [selectCategorys, setselectCategorys] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const history = useHistory();
  const getProducts = () => {
    if (selectCategorys) {
      getProductCategory(selectCategorys).then((res) => {
        setproducts(res.data.products);
        setTimeout(() => {
          setisLoading(true);
        }, 3000);
      });
    } else {
      getAllProduct()
        .then((res) => {
          setproducts(res.data.products);
          setTimeout(() => {
            setisLoading(true);
          }, 3000);
        })
        .catch((e) => console.log(e));
    }
  };
  useEffect(() => {
    getProducts(products);
  }, [selectCategorys]);
  const navigate = (path) => {
    history.push(path);
  };
  const formatPrice = (price, discount) => {
    const valor = price - (price * discount) / 100;
    return valor.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    });
  };
  return (
    <div className="m-2 transition-shadow duration-300">
      <NavbarCategory setisLoading={setisLoading} setselectCategorys={setselectCategorys} />
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-4">
          {products.map((product) => (
            <div key={product.id} className="flex-col flex">
              <div className="border-2 border-slate-700 items-center py-2 bg-white rounded-lg">
                <h3 className="font-semibold p-0 m-0 truncate cursor-pointer hover:whitespace-normal text-lg mx-2 transition-all">
                  {product.title}
                </h3>
                <img
                  className="md:w-52 md:h-52  w-40 h-40 m-auto rounded"
                  src={product.thumbnail}
                  alt="product"
                />
                <h3 className="text-base font-semibold p-1 m-0 line-through text-gray-600">
                  {formatPrice(product.price, 0)}
                </h3>
                <div className="flex justify-center font-semibold p-1 m-0">
                  <h3 className="text-xl mx-2">
                    {formatPrice(product.price, product.discountPercentage)}
                  </h3>
                  <small className="text-sm md:text-base text-green-500">{product.discountPercentage}% OFF </small>
                </div>
                <button
                  onClick={() => navigate(`/details/${product.id}`)}
                  className="bg-emerald-500 hover:bg-emerald-300 text-xl font-bold rounded-lg py-2 w-3/4"
                >
                  See Product
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <img className="w-96 m-auto" src={Loading} alt="loading" />
      )}
    </div>
  );
};

export default Category;
