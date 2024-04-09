
import "./env.js"

import express from 'express' ;
import { connectUsingMongoose } from './src/database/mongoose.config.js';
import userRouter from './src/user/user.routes.js';
import loggerMiddleware from "./src/middleware/logger.middleware.js";
const server = express();

server.use(express.json());
server.use(loggerMiddleware);
server.use('/api/users',loggerMiddleware,userRouter);

server.listen(3002,()=>{
    console.log("server is running on 3002");
    connectUsingMongoose()
})