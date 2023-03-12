const bcrypt = require("bcrypt");

const generatePassword = async (passwordReg, key) => {
  const salt = await bcrypt.genSalt(key);
  const hash = await bcrypt.hash(passwordReg, salt);

  return await hash;
};

module.exports = generatePassword;
