import { useState } from 'react'
import Dropdown from '../components/Dropdown'

function DropdownPage() {
  const [ selection,setSelection ] = useState(null)
  const handleSelect = (currentSelection) => {
    setSelection(currentSelection);
  }

  const options = [ 
    { id: 1, label: 'Red', value: 'red' },
    { id: 2, label: 'Blue', value: 'blue' },
    { id: 3, label: 'Green', value: 'green' }
  ]

  return (
      <Dropdown options={options} value={selection} onChange={handleSelect}/>
  )
}

export default DropdownPage
