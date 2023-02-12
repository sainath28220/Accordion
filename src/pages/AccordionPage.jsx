import { useState } from 'react';
import Accordion from '../components/Accordion'


function AccordionPage() {
  const [ index,setIndex ] = useState(0);
  const handleClick = (id) => {
    if (id===index){
      setIndex(0)
    }else{
      setIndex(id)
    }
  }
  const items = [{
    id:1,
    label: 'can i use javascript on a project?',
    content: "You can use javascript on any project u want to work on in any project"
  },{
    id:2,
    label: 'can i use react on a project?',
    content: "You can use javascript on any project u want to work on in any project"
  },{
    id:3,
    label: 'can i use ruby on rails on a project?',
    content: "You can use javascript on any project u want to work on in any project"
  }]
  return( 
    <Accordion items={items}/>
  )
}

export default AccordionPage;