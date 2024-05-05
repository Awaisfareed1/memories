import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 8080;

app.get('/' , (req, res) => {
    res.send("<h1>HOME OPENED</h1>")
})

app.listen(PORT , () => {
    console.log(`App listening on Port ${PORT}`);
})