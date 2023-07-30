import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../hooks/useCart";
import DeleteIcon from "@mui/icons-material/Delete";

const CartContainer = (props) => {
  const { items } = props;
  const { updateCart, removeFromCart } = useCart();
  const formatPrice = (price, discount) => {
    const valor = price - (price * discount) / 100;
    return valor.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    });
  };
  return (
    <div className="cursor-pointe my-1 flex flex-col gap bg-slate-700 md:rounded-lg text-stone-50 transition-shadow duration-300">
      <div className="flex my-1">
        <div className="bg-white p-3 rounded mx-2">
          <img
            className="w-32 h-36 md:mb-0"
            src={items.thumbnail}
            alt="portadas"
          />
        </div>
        <div className="block text-left w-4/6 transition place-self-start">
          <h1 className="text-xl overflow-hidden pt-1 h-14 font-semibold text-white w-full">
            {items.title}
          </h1>
          <div className="pt-1">
            <h2 className="text-gray-300 text-lg font-semibold">
              Price {formatPrice(items.price, items.discountPercentage)}
            </h2>
            <div className="flex text-lg font-semibold cursor-pointer hover:text-red-500">
              Remove <DeleteIcon  onClick={()=>removeFromCart(items)}/>
            </div>
            <div className="flex bg-green-600 w-max p-2 rounded items-center">
              <AddIcon
                onClick={() =>
                  updateCart({ product: items, count: items.quantity + 1 })
                }
                className="cursor-pointer"
              />
              <div className="bg-white h-max py-1 px-2 mx-2 rounded text-black">
                {items.quantity}
              </div>
              <RemoveIcon
                onClick={() => {
                  items.quantity > 1 &&
                    updateCart({ product: items, count: items.quantity - 1 });
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
