const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

const jwt = require('jsonwebtoken');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('dotenv').config();
require("./config/mongoose.config");
require("./routes/TimeBlockCard.routes")(app);
require("./routes/User.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );