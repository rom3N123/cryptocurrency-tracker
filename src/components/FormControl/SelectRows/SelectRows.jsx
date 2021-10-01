import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function SelectRows({ options, defaultValue }) {
   return (
      <FormControl>
         <InputLabel id="select-rows">Show rows</InputLabel>
         <Select defaultValue={defaultValue} labelId="select-rows">
            {options.map((option) => (
               <MenuItem key={option} value={option}>
                  {option}
               </MenuItem>
            ))}
         </Select>
      </FormControl>
   );
}

export default SelectRows;
