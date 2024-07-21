const {profile} =require("../services/user_validation2")


exports.profile = async (req, res) => {
    try {
      const data = await profile(req, res);
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