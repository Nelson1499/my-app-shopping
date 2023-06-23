import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/products";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const DetailsProducts = (props) => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [count, setcount] = useState(1);
  const { add, setAdd } = props;
  const obtainProduct = () => {
    getProduct(id)
      .then((res) => setproduct(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    obtainProduct();
  }, [id]);
  /**
   * Agrega productos al carrito.
   *
   * @param {*} data - Los datos del producto a agregar.
   */
  const addCart = (data) => {
    const existingItem = add.find((item) => item.id === data.id);

    if (!existingItem) {
      setAdd([...add, data]);
    } else {
      const updatedAdd = add.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: item.count + data.count };
        }
        return item;
      });

      setAdd(updatedAdd);
    }
  };
  return (
    <div className="flex items-center">
      <div className="lg:flex block m-auto">
        <div className="p-5 bg-white rounded-lg w-80 lg:w-auto mx-auto lg:mx-1">
          <img
            className="rounded lg:h-96 lg:w-96 w-72 h-72 m-auto"
            src={product.image}
            alt="ProductImage"
          />
        </div>
        <div className="text-white md:w-2/4 mx-3 sm:mx-auto my-5 text-left">
          <h3 className="text-3xl font-semibold">
            Product Name: {product.title}
          </h3>
          <p className="text-2xl font-semibold">
            Description: {product.description}
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
            onClick={() => addCart({ id: product.id, count })}
            className="w-full mt-10 p-2 rounded bg-green-600 hover:bg-green-500 font-semibold text-xl"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsProducts;
