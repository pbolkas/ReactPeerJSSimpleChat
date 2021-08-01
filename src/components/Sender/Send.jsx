import { useState } from "react";
import { conn } from "../peer";

const Send = ({peer}) => {
  const [data, setData] = useState('');

  const sendMessage =() =>{
    console.log(`Send data ${data}`)
    conn.send(data);
  }
  
  return <>
    <input id="dataToSend" type="text"  onChange={(evt)=>setData(evt.target.value)}/>
    <button onClick={sendMessage} >send</button>
  </>
}

export default Send;