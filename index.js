const express = require('express');
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());

const chat = require("./routes/openai");

app.use('/', chat);

app.listen('3000', () =>{
    console.log("Server is runingn...");
})