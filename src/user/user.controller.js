
import User from './user.schema.js' ;

export default class UserController{

    async getUserDetails(req,res){
        const { user_id } = req.params;
  try {
    const userDetails = await User.findById(user_id);
    if (!userDetails) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(userDetails);
  } catch (error) {
    console.log("error",error)
    res.status(500).json({ error: 'Failed to fetch user details' });
  }
    }



    async updateUserDetails(req,res){
        const { user_id,user_name,user_email,user_password,user_image } = req.body;
        console.log(req.user)
  try {
    const updatedUser = await User.updateOne(req.body) ;
    // {
    //   // where: { user_id: req.user.user_id }   // Assuming you have the user_id in req.user after authentication
    // });
    if (updatedUser[0] === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User details updated successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to update user details' });
  }
    }


    async getUserImage(req,res){
        const { user_id } = req.params;
        try {
          const user = await User.findById(user_id);
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          res.json({ user_image: user.user_image });
        } catch (error) {
          res.status(500).json({ error: 'Failed to fetch user image' });
        }
    }

    async insertUser(req,res){
        const { user_id,user_name,user_email,user_password,user_image } = req.body;

        try {
          console.log(req.token);
          res.token = req.token;
          const newUser = await User.create(req.body);
          res.json({ message: 'User added successfully', user: newUser,token:req.token });
        } catch (error) {
          console.log("error",error)
          res.status(500).json({ error: 'Failed to insert new user' });
          
          
        }
    }

    async deleteUser(req,res){
        const { user_id } = req.params;
        try {
          const deletedUser = await User.findByIdAndDelete(user_id);
          if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
          }
          res.json({ message: 'User deleted successfully' });
        } catch (error) {
          res.status(500).json({ error: 'Failed to delete user' });
        }
    }
}