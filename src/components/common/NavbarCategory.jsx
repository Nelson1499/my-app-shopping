import { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { getAllCategory } from "../../utils/category";

/**
 * Descripción de la función
 * @param {*} props - Props que se pasan a la función. Modifica el estado "selectCategorys" en category.jsx.
 * @returns El resultado de la función (si corresponde)
 */
const NavbarCategory = (props) => {
  const [categorys, setcategorys] = useState([]);
  const [show, setShow] = useState(false);
  const [selectCategorys, setselectCategory] = useState({});
  const { setselectCategorys, setisLoading } = props;
  const getCategory = () => {
    getAllCategory()
      .then((res) => setcategorys(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getCategory();
  }, []);
  /**
   *
   * @param {*} data - Los datos de la categoría seleccionada
   */
  const selectCategory = (data) => {
    setselectCategorys(data);
  };
  return (
    <>
      <button
        className="bg-yellow-400 rounded w-40 p-2 text-white"
        onClick={() => setShow(!show)}
      >
        {show ? "Hidden Category" : "Show Category"}
        {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </button>
      {show && (
        <>
          <h1 className="text-white text-2xl font-bold">Category</h1>

          <section className="text-white text-2xl font-semibold grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 m-auto">
            {categorys.map((category, index) => (
              <label
                key={index}
                className="w-full bg-yellow-400 p-2 flex items-start rounded cursor-pointer text-base md:text-xl space-x-2"
                onClick={() => {
                  selectCategory(category);
                  setselectCategory({ category, index });
                  setisLoading(false);
                }}
              >
                <span className="relative flex h-5 w-5">
                  {selectCategorys.index === index && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-5 w-5 ${
                      selectCategorys.index === index
                        ? "bg-sky-500"
                        : "bg-white"
                    }`}
                  ></span>
                </span>
                <p className="whitespace-nowrap">{category}</p>
              </label>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default NavbarCategory;

{
  /* <FormControlLabel
              key={index}
              value={category}
              className="text-2xl font-semibold bg-yellow-400 rounded w-full"
              control={<Radio className="text-white" />}
              label={category}
              onClick={() => {
                selectCategory(category);
                setisLoading(false);
              }}
            /> */
}
