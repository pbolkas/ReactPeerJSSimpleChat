import Peer from "peerjs";
import {v4 as uuidv4} from 'uuid';

export let conn = null;
const id = uuidv4().substr(0, 4);

let client = new Peer(id, {
  host: window.location.hostname,
  port: 9000,
  debug: 1,
  path : "/myapp"
});

client.on('open', (id) => {
  console.log(`My Peer id is ${id}`);
});

client.on('connection', (c) => {
  conn =c;
  ready();
})

const ready = () => {
  conn.on('data', function (data) {
      console.log(`Data received ${data}`);
  });
  conn.on('close', function () {
      console.log('Closed connection');
      conn = null;
  });
}

export const join = (remoteId) =>{

  if(conn)
  {
    conn.close();
  }

  connectToRemote(remoteId);
  conn.on('open', () => {
    console.log(`Connected to : ${conn.peer}`);
    conn.send(`Hola ${conn.peer}`);
  });

  conn.on('data', (data) => {
    console.log(`Message got ${data}`)
  });

  conn.on('close', () => {
    console.log(`connection closed `)
  })

}

export const connectToRemote = (remoteId) => {
  conn = client.connect(remoteId, {
    reliable: true
  });
}

export default client;