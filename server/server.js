require('./config/config');


const mongoose = require('mongoose');
const express = require('express');
const app = express();

let Username = "developer";
let UserPwd = "developer";

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); //middlewares

app.use(bodyParser.json()); //middlewares

app.use(require('./routes/usuario'));

mongoose.connect('mongodb+srv://admin:qwerty123@cluster0-aw5st.mongodb.net/prueba', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;

    console.log("Base de datos online");
});

mongoose.set('useCreateIndex', true);


app.listen(process.env.PORT, () => {
    console.log("escuchando", process.env.PORT);
});