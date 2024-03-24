import mogoose from " mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxLength: [50, "Name should be less then 50 characters"],
  },
  size: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  age : number
});

export default mongoose.model("User", userSchema); //important dont export userSchema
