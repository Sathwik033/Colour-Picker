import React,{useState} from 'react';

function ColorPicker(){

  const [color,setColor]=useState();

  function settingColor(event){
    setColor(event.target.value)
  }
  return(
    <div className="div-container">
      <h1>Color Picker</h1>
      <div className="coloor-display" style={{backgroundColor:color}}>
      <p  >Selected Color:{color}</p>
      </div>
      
      <label>
        <p>Select a Color</p>
        <input type="color" value={color} onChange={settingColor}></input>
      </label>
    </div>
  )
}

export default ColorPicker;