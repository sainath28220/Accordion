import { useState } from "react";
import { GoChevronLeft,GoChevronDown } from "react-icons/go";

const Dropdown = ({ options }) => {
  const [ list,setList ] = useState("Select...")
  const listOfOptions = options.map((option) => {
    return(
      <p value={option.value} id={option.id}>{option.label}</p>
    )
  })
  return(
  <div>
    <label className="block">select a Color </label><br />
    <div name="options" id="option" className="inline-flex space-around  border-solid border-2 rounded-lg border-black w-40">
      <p>{list}</p>
      <p><GoChevronDown /></p> 
    </div>
  </div>
  )
};

export default Dropdown;