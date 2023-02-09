import { useState } from 'react'
import Dropdown from './components/Dropdown'

function App() {
  const options = [ 
    { id: 1, label: 'Red', value: 'red' },
    { id: 2, label: 'Blue', value: 'blue' },
    { id: 3, label: 'Green', value: 'green' }
  ]

  return (
    <div>
      <Dropdown options={options} />
    </div>
  )
}

export default App
