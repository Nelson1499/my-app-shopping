import toast, { Toaster } from "react-hot-toast";
import CartContainer from "../../containers/CartContainer";
import { useCart } from "../../hooks/useCart";
import { stripePost } from "../../utils/stripe";

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce((accumulator, element) => {
    const multiplication =
      (element.price - (element.price * element.discountPercentage) / 100) *
      element.quantity;
    return accumulator + multiplication;
  }, 0);
  const formattedTotal = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartProducts = (data) => {
    if (data.length) {
      stripePost(data);
    } else {
      toast.error("you have no products in the cart, please add products.");
    }
    // console.log(data);
  };
  return (
    <div className="lg:flex justify-between mx-2 transition-shadow duration-300">
      <Toaster />
      <div className="my-2">
        {cart.length ? (
          <article className="grid md:grid-cols-2 gap-2">
            {cart.map((items, i) => <CartContainer items={items} key={i} />)}
          </article>
        ) : (
          <h3 className="text-white">Add product to cart, please.</h3>
        )}
      </div>
      <div className="w-11/12 mx-3 lg:w-96 h-96 border border-gray-500 p-2 rounded text-white flex flex-col">
        <div className="flex justify-between m-4">
          <h3>Subtotal</h3>
          <h3>{formattedTotal}</h3>
        </div>
        <hr className="w-full border" />
        <div className="flex justify-between m-4">
          <h3>Total</h3>
          <h3>{formattedTotal}</h3>
        </div>
        <button
          onClick={() => cartProducts(cart)}
          className="w-11/12 p-3 mx-3 bg-green-500 rounded text-xl font-semibold mt-auto"
        >
          Process purchase
        </button>
      </div>
    </div>
  );
};

export default Cart;
