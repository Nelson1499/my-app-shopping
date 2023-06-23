import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { getAllCategory } from "../../utils/category";

/**
 * Descripción de la función
 * @param {*} props - Props que se pasan a la función. Modifica el estado "selectCategorys" en category.jsx.
 * @returns El resultado de la función (si corresponde)
 */
const NavbarCategory = (props) => {
  const [categorys, setcategorys] = useState([]);
  const { setselectCategorys } = props;
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
    <FormControl className="m-auto mx-3">
      <h1
        className="text-white text-2xl font-bold"
        id="demo-row-radio-buttons-group-label"
      >
        Category
      </h1>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="text-white text-2xl font-semibold"
      >
        {categorys.map((category, index) => (
          <FormControlLabel
            key={index}
            value={category}
            className="text-2xl font-semibold"
            control={<Radio className="text-white" />}
            label={category}
            onClick={() => selectCategory(category)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default NavbarCategory;
