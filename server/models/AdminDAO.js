require("../utils/MongooseUtil");
const Models = require("./Models");
const CryptoUtil = require("../utils/CryptoUtil");

const AdminDAO = {
  async selectByUsernameAndPassword(username, password) {
    console.log("LOGIN QUERY:", username, password);

    const admin = await Models.Admin.findOne({
      username: username,
      password: CryptoUtil.md5(password),
    });

    console.log("ADMIN FOUND:", admin);
    return admin;
  },
};

module.exports = AdminDAO;
