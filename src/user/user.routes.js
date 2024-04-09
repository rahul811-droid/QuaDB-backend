

import express from 'express' ;

import UserController from './user.controller.js';
import jwtAuth from '../middleware/jwt.middleware.js';
import jwtVerify from '../middleware/Auth.middleware.js';



const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/details/:user_id',userController.getUserDetails);



userRouter.get('/image/:user_id', userController.getUserImage);

userRouter.post('/insert',jwtAuth, userController.insertUser);

userRouter.delete('/delete/:user_id', userController.deleteUser);

userRouter.put('/update',jwtVerify,userController.updateUserDetails);


export default userRouter;


    
