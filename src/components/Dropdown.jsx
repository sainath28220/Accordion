import { useEffect, useState } from "react";
import { GoChevronLeft,GoChevronDown } from "react-icons/go";
import Panel from './Panel'

const Dropdown = ({ options,value,onChange }) => {
  const [ isOpen,setIsOpen ] = useState(false)

  useEffect(()=>{
    const handler = (event) => {
      console.log(event);
    }
    document.addEventListener('click',handler,true);
    return ()=>{
      document.removeEventListener('click',handler);
    }
  },[])

  const renderedOptions = options.map((option) => {
    return(
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={()=>handleOptionClick(option)}>{option.label}</div>
    )
  })

  const handleClick = () => {
    setIsOpen(prevOpen => !prevOpen);
  }

  const handleOptionClick = (currentSelectedValue) => {
    onChange(currentSelectedValue)
    handleClick();
  }

  return(
  <div className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        { value?.label || 'Select...' }
        { isOpen ? <GoChevronDown /> : <GoChevronLeft />}
      </Panel>
      { isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
  </div>
  )
};

export default Dropdown;