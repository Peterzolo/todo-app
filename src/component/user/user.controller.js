const bcrypt = require("bcryptjs");
const User = require("./user.model");
const userService = require("./user.service");

exports.registerUser = async (req, res) => {
  const { name, email, password, status } = req.body;
  try {
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      res.status(302).json("User with this email already exists");
    } else {
      const salt = await bcrypt.genSalt(process.env.SALT);
      const hashedPassword = await bcrypt.hash(password, salt);
      if (!hashedPassword) {
        res.send("Password could be hashed");
      } else {
        const userObject = {
          name,
          email,
          password,
          status,
        };
        const user = await userService.ceateUser(userObject);
        res.status(200).json({
            Success : true,
            Message : "User successfully added",
            content : user
        })
      }
    }
  } catch (error) {}
};
