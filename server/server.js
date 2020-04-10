require('./config/config');


const mongoose = require('mongoose');
const express = require('express');
const app = express();

let Username = "developer";
let UserPwd = "developer";

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); //middlewares

app.use(bodyParser.json()); //middlewares

//configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    user: Username,
    pass: UserPwd,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;

    console.log("Base de datos online");
});



app.listen(process.env.PORT, () => {
    console.log("escuchando", process.env.PORT);
});