const express = require("express");
const router = express.Router();

// const user_auth = require("../../middleware/user_auth.js");
// const user_auth = require("../../../middleware/patient_auth");

const {
    registor
} = require("../controllers/user_validation");

router.post("/registor", registor);


//login
const {
    login
}= require("../controllers/user_validation");
router.post("/login", login);

module.exports = router;

