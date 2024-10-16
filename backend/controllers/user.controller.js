import User from "../models/user.models.js";

const getUsersForSidebar = async (req,res) => {
try {
    
    const loggedInUSer = req.user._id;

    const filteredUsers = await User.find({_id : {$ne : loggedInUSer}}).select("-password")

    res.status(200).json(filteredUsers);

} catch (error) {
    console.log("Error in getUserForSidebar", error.message)
    res.status(500).json({error: "Internal Server Error"})
}
}

export {getUsersForSidebar}