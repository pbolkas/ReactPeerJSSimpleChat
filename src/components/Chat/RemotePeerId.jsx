import { useState } from "react";
import { join } from "../peer";

const RemotePeerId = ({peer}) => {
  const [peerId,setPeerID ] =useState('');

  const connectToPeer = () => {
     console.log(`Connecting to ${peerId}...`)
     join(peerId);
  }

  return <>
  <input type="text" id="peerid" onChange={(evt)=> setPeerID(evt.target.value)} />
  <button onClick={connectToPeer}> Connect</button>
  </>
}

export default RemotePeerId;