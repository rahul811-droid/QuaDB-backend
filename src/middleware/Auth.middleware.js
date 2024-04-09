import jwt from 'jsonwebtoken';
import User from '../user/user.schema.js' ;
import dotenv from 'dotenv'
const jwtVerify = async (req, res, next)=>{
   
    const token = req.headers.authorization;
    console.log("update",token)
    if (!token) {
        return res.status(401).json({ message: 'Token is missing' });
      }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }
        
    catch(err){
        console.log(err);
        return res.status(200).send("Something went wrong")  
    }
   
   
};

export default jwtVerify;