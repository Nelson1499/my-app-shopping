import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../hooks/useCart";

const CartContainer = (props) => {
  const { items } = props;
  const { updateCart } = useCart();
  const formattePrice = items.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="cursor-pointe my-1 flex flex-col gap bg-slate-700 md:rounded-lg text-stone-50 transition-shadow duration-300">
      <div className="flex my-1">
        <div className="bg-white p-3 rounded mx-2">
          <img
            className="w-24 h-32 md:mb-0 object-contain"
            src={items.image}
            alt="portadas"
          />
        </div>
        <div className="block text-left w-4/6 transition place-self-start">
          <h1 className="text-lg overflow-hidden pt-1 h-14 font-semibold text-white w-full">
            {items.title}
          </h1>
          <div className="pt-1">
            <h2 className="text-gray-300 text-lg font-semibold">
              Price {formattePrice}
            </h2>
            <div className="flex bg-green-600 w-max p-2 rounded items-center">
              <AddIcon
                onClick={() => updateCart({product: items, count: items.quantity + 1})}
                className="cursor-pointer"
              />
              <div className="bg-white h-max py-1 px-2 mx-2 rounded text-black">
                {items.quantity}
              </div>
              <RemoveIcon
                onClick={() => {
                  items.quantity > 1 && updateCart({product: items, count: items.quantity - 1});
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
