const express = require("express");
const cors = require("cors");
require('dotenv').config();
const router = require("./routers/NotesRouter.js");
const bodyParser = require('body-parser')

const dataConnection = require('./data/connection.js');
dataConnection.connectToDatabase();

const app = express();

//si tu req.body devuelve undefined, agregar el bodyparser. en detrimento, elimine el express.json()
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors());

const port = process.env.port || 5000;

app.use("/server", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

