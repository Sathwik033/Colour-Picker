import React,{useState} from 'react';

function ColorPicker(){

  const [color,setColor]=useState();

  function settingColor(event){
    setColor(event.target.value)
  }
  return(
    <div>
      <h1>Color Picker</h1>
      <p style={{backgroundColor:color}}>Selected Color:{color}</p>
      <label>
        <p>Select a Color</p>
        <input type="color" value={color} onChange={settingColor}></input>
      </label>
    </div>
  )
}

export default ColorPicker;