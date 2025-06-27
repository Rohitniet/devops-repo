"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const client_1 = require("@repo/db/client");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', async function connection(ws) {
    await client_1.client.user.create({
        data: {
            name: JSON.stringify(Math.random()),
            password: JSON.stringify(Math.random())
        }
    });
    ws.send("you are connected ");
});
