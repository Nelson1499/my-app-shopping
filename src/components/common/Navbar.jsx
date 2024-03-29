import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useCart } from "../../hooks/useCart";

const Navbar = () => {
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-700 py-2">
      <nav className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
        <Link className="cursor-pointer  text-white  no-underline" to="/">
          <div className="flex items-center cursor-pointer">
            <h1 className="text-white text-3xl font-extrabold z-10">
              Shopping
            </h1>
            <LocalMallIcon className="text-yellow-400 h-8 w-8 ml-2" />
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-4 text-white text-2xl font-semibold px-2">
          <ul className="flex items-center space-x-4">
            <Link className="cursor-pointer  text-white  no-underline" to="/">
              <li className="hover:text-yellow-500">Home</li>
            </Link>

            <Link
              className="cursor-pointer  text-white  no-underline"
              to="/category"
            >
              <li className="hover:text-yellow-500">Category</li>
            </Link>
            <Link
              className="cursor-pointer  text-white  no-underline"
              to="/contact"
            >
              <li className="cursor-pointer hover:text-yellow-500">Contact</li>
            </Link>
            <Link
              className="cursor-pointer  text-white  no-underline"
              to="/about-us"
            >
              <li className="cursor-pointer hover:text-yellow-500">About us</li>
            </Link>
          </ul>
          <Link className="cursor-pointer  text-white  no-underline" to="/cart">
            <div className="relative flex">
              <ShoppingCartIcon
                fontSize="large"
                className="z-10 cursor-pointer hover:text-yellow-500 text-xl"
              />
              <div className="bg-yellow-400 text-slate-700 rounded-full w-6 h-6 items-center absolute -top-2 left-8 flex justify-center">
                {cart.length ? (
                  <p className="m-auto text-base"> {cart.length}</p>
                ) : (
                  <p className="m-auto text-xs">
                    <AddIcon />
                  </p>
                )}
              </div>
            </div>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          {isMobileMenuOpen ? (
            <CloseIcon
              className="text-white h-8 w-8 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <MenuIcon
              className="text-white h-8 w-8 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="bg-gray-700 py-2 md:hidden">
          <ul className="flex flex-col items-center space-y-2 text-white text-xl font-bold ">
            <Link className="cursor-pointer  text-white  no-underline" to="/">
              <li className="hover:text-yellow-500">Home</li>
            </Link>
            <Link
              className="cursor-pointer  text-white  no-underline"
              to="/category"
            >
              <li className="hover:text-yellow-500">Categorías</li>
            </Link>
            <Link
              className="cursor-pointer  text-white  no-underline"
              to="/contact"
            >
              <li className="cursor-pointer hover:text-yellow-500">Contacto</li>
            </Link>
            <Link
              className="cursor-pointer  text-white  no-underline"
              to="/about-us"
            >
              <li className="cursor-pointer hover:text-yellow-500">About us</li>
            </Link>
            <Link
              className="cursor-pointer  text-white  no-underline"
              to="/cart"
            >
              <div className="relative hover:text-yellow-500 cursor-pointer">
                Cart
                <ShoppingCartIcon fontSize="medium" className="z-10 " />
                <div className="bg-yellow-400 text-slate-700 rounded-full w-6 h-6 items-center absolute -top-2 left-14 flex justify-center">
                  {cart.length ? (
                    <p className="m-auto text-base"> {cart.length}</p>
                  ) : (
                    <p className="m-auto text-xs">
                      <AddIcon />
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
