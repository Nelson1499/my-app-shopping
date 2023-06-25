import React, { useEffect, useState } from "react";
import { getProduct } from "../utils/products";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartContainer = (props) => {
  const { items, setAdd, add} = props;
  const [products, setproducs] = useState([]);
  const obtainproduct = () => {
    getProduct(items.id)
      .then((res) => setproducs(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    obtainproduct();
  }, []);
  /**
   * Aqui se agregan la cantidad de productos.
   * @param {*} count - conteo de productos. 
   */
  const updatedAdd = (count) => {
    const addNew = add.map((item) => {
      if (item.id === items.id) {
        return { ...item, count: count };
      }
      return item;
    });
    setAdd(addNew);
    
  };

  const formattedPrice = products.price?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className=" cursor-pointe my-1 flex flex-col gap bg-slate-700 md:rounded-lg text-stone-50 transition md:transition">
      <div className="flex my-1">
        <div className="bg-white p-3 rounded mx-2">
          <img
            className="w-24 h-32 md:mb-0 object-contain"
            src={products.image}
            alt="portadas"
          />
        </div>
        <div className="block text-left w-4/6 transition place-self-start">
          <h1 className="text-lg overflow-hidden pt-1 h-14 font-semibold text-white w-full">
            {products.title}
          </h1>
          <div className="pt-1">
            <h2 className="text-gray-300 text-lg font-semibold">
              Price ${formattedPrice}
            </h2>
            <div className="flex bg-green-600 w-max p-2 rounded items-center">
              <AddIcon
                onClick={() => updatedAdd(items.count + 1)}
                className="cursor-pointer"
              />
              <div className="bg-white h-max py-1 px-2 mx-2 rounded text-black">
                {items.count}
              </div>
              <RemoveIcon
                onClick={() => {
                  items.count > 1 && updatedAdd(items.count - 1);
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
