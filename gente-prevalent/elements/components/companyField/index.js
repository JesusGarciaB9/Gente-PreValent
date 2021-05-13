import React, { useState } from "react";
const companyField = (props) => { 
    const {headline, description} = props.fieldProps;
    const [value,setValue] = React.useState(description);
    function handleChange(event) {
      setValue(event.target.value);
    }
    return (
      <div className="grid grid-cols-1  pb-14  px-4  items-center font-bold w-full  ">
        <label className="grid col-span-1 text-sm text-custom-gray-800 w-full" htmlFor="field">
            {headline}
        </label>
 
        <div className="grid col-span-1 text-base w-full">
        <input type="text" id="field" className="text-base font-bold focus:outline-none" name="field" value={value}  onChange={(e)=>handleChange(e)}/> 
        </div>
        <div className="border-b-2  border-custom-gray-900 w-full"> 
        </div>
      
      </div>
    );
  };
  export default companyField;
  