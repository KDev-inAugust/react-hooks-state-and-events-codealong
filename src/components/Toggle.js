import React, {useState} from "react";


function Toggle() {
  const [isOn, setToggle]=useState(false);
  function toggleFunction(){
    setToggle((isOn)=>!isOn);

  }

  const color = isOn ? "red" : "white";

  return <button style={{background: color}} onClick={toggleFunction}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
