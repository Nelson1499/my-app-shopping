import React, { useEffect, useState } from "react";
import CartContainer from "../../containers/CartContainer";

const Cart = (props) => {
  const [totalSum, setTotalSum] = useState(0);
  const [value, setvalue] = useState([]);
  const { add, setAdd } = props;
  useEffect(() => {
    calculateTotalSum();
  }, [add]);

  /**
   * Cálculo del total multiplicando la cantidad de productos por su precio
    y sumando los resultados.
   */
  const calculateTotalSum = () => {
    const result = add.map((obj) => obj.count * obj.price);
    const sumTotal = result.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalSum(sumTotal?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,}));
  };
  return (
    <div className="lg:flex justify-between mx-2">
      <div className="gap-2 transition-shadow">
        {add.map((items) => (
          <CartContainer
            items={items}
            add={add}
            setAdd={setAdd}
            key={items.id}
            setvalue={setvalue}
            value={value}
          />
        ))}
      </div>
      <div className="w-11/12 mx-3 lg:w-96 h-96 border border-gray-500 p-2 rounded text-white flex flex-col">
        <div className="flex justify-between m-4">
          <h3>Subtotal</h3>
          <h3>${totalSum}</h3>
        </div>
        <hr className="w-full border" />
        <div className="flex justify-between m-4">
          <h3>Total</h3>
          <h3>${totalSum}</h3>
        </div>
        <button className="w-11/12 p-3 mx-3 bg-green-500 rounded text-xl font-semibold mt-auto">
          Process purchase
        </button>
      </div>
    </div>
  );
};

export default Cart;
