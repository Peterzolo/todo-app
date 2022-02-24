const User = require("./user.model");

exports.ceateUser = async ({ name, email, password, status }) => {
  const userObject = {
    name,
    email,
    password,
    status,
  };
  const newUser = new User(userObject);
  await newUser.save();

  return {
    name,
    email,
    password,
    status,
  };
};
