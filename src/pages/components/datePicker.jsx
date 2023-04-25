import React,{useState} from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const datePicker = () => {
  // const [selected, setSelected] = useState()

    return <DayPicker 
    mode="single"
      selected={selected}
      onSelect={setSelected}/>
}

export default datePicker