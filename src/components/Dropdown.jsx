
const Dropdown = ({ options }) => {
  console.log(options);
  const listOfOptions = options.map((option) => {
    return(
      <div key={option.id}>
        <div>{option.label}</div>
      </div>
    )
  })
  return(
  <div>
    <label className="block">select a Color </label>
    <select name="options" id="option" className="border-solid border-2 rounded-lg">
      <option value="">Select......</option>
    </select>
    {listOfOptions}
  </div>
  )
};

export default Dropdown;