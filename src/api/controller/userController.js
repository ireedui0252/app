const database = require("../../config/database");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");
const generatePassword = require("../../helper/password");
const userModel = require("../model/userModel");

const login = async (request, response, next) => {
  const { username, password } = request.body;

  const userData = await userModel.getUser(user_name);

  console.log(userData);

  if (userData != null) {
    user_name = userData.user_name;
    user_password = userData.user_password;

    const login = await bcrypt.compare(password, user_password);

    if (user_name == user_name && (await login) == true) {
      response.json({ type: "success" });
    } else {
      response.json({ type: "failed" });
    }
  } else {
    response.json({ type: "user not found" });
  }
};

const signup = async (request, response, next) => {
  const usernameReg = request.body.user_name;
  const passwordReg = request.body.user_password;
  const email = request.body.user_email;

  const hash = await generatePassword(passwordReg, 10);

  await database.query(
    `INSERT INTO _user (p_id, user_name, user_password, user_email) VALUES ('${uuid()}', '${usernameReg}', '${hash}' '${email}');`,
    (err) => {
      if (err) next(err);
    }
  );

  await response.json({ type: "success" });
};

module.exports = {
  login,
  signup,
};
