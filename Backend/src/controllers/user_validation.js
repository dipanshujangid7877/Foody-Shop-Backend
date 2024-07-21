// const { all } = require("axios");
const {registor} = require("../services/user_validation")
const {login} = require("../services/user_validation")

//registor
exports.registor = async (req, res) => {
    try {
      const data = await registor(req, res);
      if (data.success) {
        res.status(200).json(data);
      }
      else{
          res.status(403).json(data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

// login
  exports.login = async (req, res) => {
    try {
      const data = await login(req, res);
      if (data.success) {
        res.status(200).json(data);
      }
      else{
          res.status(403).json(data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };


