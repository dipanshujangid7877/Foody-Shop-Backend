const express = require("express");
const router = express.Router();

//profile

const {
    profile
}= require("../controllers/user_validation2");
router.post("/profile", profile);
module.exports = router;

