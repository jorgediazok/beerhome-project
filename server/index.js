//Para variables de entorno
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

//Imports que se van a usar
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Para dar inicio al servidor
const app = express();

//Middlewares
app.use(cors());

//Conexión a la Base de Datos en MONGO DB
//Database
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB is connected!!'))
  .catch((err) => console.log(err));

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
