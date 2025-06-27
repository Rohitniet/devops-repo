"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/signin", async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    try {
        await client_1.client.user.create({
            data: {
                name,
                password
            }
        });
    }
    catch (e) {
        console.log(e);
    }
    res.json({
        message: "you have signed up"
    });
});
app.listen(3001);
