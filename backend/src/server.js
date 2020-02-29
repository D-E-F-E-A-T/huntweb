const express = require("express");
const mongoose = require("mongoose");
const connectString = 'mongodb+srv://renan:teste123@cluster0-3ea88.mongodb.net/test?retryWrites=true&w=majority';
const cors = require("cors");
const requireDir = require('require-dir');

//Iniciando o  App
const app = express();

app.use(express.json());
app.use(cors());
//Iniciando o DB
mongoose.connect(connectString,
    {useNewUrlParser: true}
);

requireDir("./src/models/");

//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001, () =>
{console.log("Server is running...")}
);