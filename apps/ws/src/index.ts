import { WebSocketServer } from 'ws';
import { client } from '@repo/db/client';
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
 
    await client.user.create({
        data:{
            name:JSON.stringify(Math.random()),
            password:JSON.stringify(Math.random())
        }
    })

    ws.send("you are connected ")

});