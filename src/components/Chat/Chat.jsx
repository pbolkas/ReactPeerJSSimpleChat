import Receive from "../Receiver/Receive";
import Send from "../Sender/Send";
import RemotePeerId from "./RemotePeerId";
import client from '../peer.jsx'

const Chat = () => {
  return <>
    <div>My id is {client.id}</div>

    <RemotePeerId peer = {client} />
    <Send peer = {client}/>
    <Receive peer = {client}/>
  </>
}

export default Chat;