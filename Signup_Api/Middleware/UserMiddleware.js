const UserModel = require("../Models/UserSchema");

exports.createUsers = async(req,res)=>{
    const data = req.body;
    console.log("aagya",data)
    try{
        const response = await UserModel.create(data)
        res.status(201).json({message:"user create success",response})
    }catch(error){
        res.status(501).json({message:"problem ho gyi",error})
    }
}

