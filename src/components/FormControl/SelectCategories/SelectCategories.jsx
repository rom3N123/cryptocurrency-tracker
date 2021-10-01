import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function SelectCategories({ categories }) {
   return (
      <FormControl>
         <InputLabel id="select-category">Category</InputLabel>
         <Select labelId="select-category">
            {categories.map((category) => (
               <MenuItem key={category} value={category}>
                  {category}
               </MenuItem>
            ))}
         </Select>
      </FormControl>
   );
}

export default SelectCategories;
