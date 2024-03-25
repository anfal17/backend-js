const mongoose = require('mongoose')
const {Schema} = mongoose 
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required:[true , "Name is required"],
        maxLength:[50, "Name must be less than 50 characters"],
        minLength:[5 , "Name must be atleast 5 chracters"],
        trim:true
    },
    email:{
        type:String,
        required:[true, 'user email is required'],
        trim:true,
        lowercase:true,
        unique:[true, "Unique mail is required"]
    },
    password:{
        type:String,
        select:false
    },forgotPasswordToken:{
        type:String
    },forgotPasswordExpiryDate:{
        type:Date
    }    
}, { timestamps: true })

userSchema.pre('save' ,async function(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    return next()
})

userSchema.methods = ({
    jwtToken(){
        return JWT.sign(
            {id: this._id, email:this.email} , 
            process.env.SECRET,
            {expiresIn :'24h'}
        )
    }
})

const userModel = mongoose.model('user' , userSchema)
module.exports = userModel