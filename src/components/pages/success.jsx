import React from "react";
import { useCart } from "../../hooks/useCart";
import { useEffect } from "react";

const success = () => {
  const { clearCart } = useCart();
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className="flex justify-center items-center h-96 text-white">
      <h1 className="p-4">🎉Gracias por su compra!!!🎉 &#x1F604;</h1>
    </div>
  );
};

export default success;
