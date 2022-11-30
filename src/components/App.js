import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [data, setData]= useState(false)
//code here 
const handleClick=()=>{
  setData(!data)


}
  

  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick} value={data? "ON" : "OFF"}>
      {data? "ON" : "OFF"}
      
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick} value={!data? "ON" : "OFF"}>
      {!data? "ON" : "OFF"}
      
      </button>
    </div>
  );
}


export default App;
