const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt')

const signup = async (req, res, next) => {
  const { name, email, password, confirmpassword } = req.body;
  console.log(name, email, password, confirmpassword);

  if (!name || !email || !password || !confirmpassword) {
    return res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }

  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid Email",
    });
  }

  if (password !== confirmpassword) {
    return res.status(400).json({
      success: false,
      message: "Password and confirmpassword doesnt match",
    });
  }

  try {
    const userInfo = userModel(req.body);

    const result = await userInfo.save();

    return res.status(200).json({
      success: true,
      data: { result },
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        message: "Account already exists with provided email id ",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password required",
    });
  }
  try {
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");

    if (!user || !(await bcrypt.compare(password, user.password)) ) {
      return res.status(400).json({
        success: false,
        message: "User doesnt exist or incorrect password",
      });
    }

    const token = user.jwtToken();
    console.log(token)
    user.password = undefined;
    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };

    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const getUser = async (req, res, next) =>{
  const userId = req.user.id
  try{
    const user = await userModel.findById(userId)
    return res.status(400).json({
      success:true,
      data: user
    })
  }catch(err){
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

const logout = (req, res) =>{
  try{

    const cookieOption = {
      expires:new Date(),
      httpOnly: true
    }

    res.cookie('token', null , cookieOption)
    res.status(200).json({
      success:true,
      message:"logged out"
    })
  }catch(err){
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

module.exports = {
  signup,
  signin,
  getUser
};
