import jwt from 'jsonwebtoken';
import User from '../user/user.schema.js' ;


const jwtAuth = async (req, res, next)=>{
    const { user_id,user_name,user_email,user_password,user_image } = req.body;
    try{
        const user = await User.findOne({user_email:user_email});
        if(user){
                return res.status(401).json('user already exist');
        }
        else{

            const token = jwt.sign({    
               user_name :user_name,
                user_email:user_email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'1h',
            }
            )       
            // 4 send token 
            req.token = token;
        }
        next();
        }
       
        
    catch(err){
        console.log(err);
        return res.status(200).send("Something went wrong")  
    }
   
   
};

export default jwtAuth;