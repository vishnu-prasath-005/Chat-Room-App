require('dotenv').config();
const express = require ('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dataBase = require('./index');
const server = express();
const port = "8070";
const userRoutes = require('./router/userRouter');
const postRoutes = require('./router/postRouter');
const roomRoutes = require('./router/roomRouter');

const corsOptions = {
    origin: ['http://localhost:4200','http://localhost:8090/user/github'],
    credentials: true,
  };
server.use(cors(corsOptions));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended:false}));
server.use("/", userRoutes);
server.use("/", postRoutes);
server.use("/", roomRoutes);

server.listen(port, _ => {
    console.log(`server listen at port ${port}`);
})