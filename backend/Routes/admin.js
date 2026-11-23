const express = require("express");
const router = express.Router();
const adminuser = "admin";
const adminpass = "admin";

router.post("/adminlogin", (req, res) => {
  const { username, password } = req.body;
  if (username === adminuser && password === adminpass) {
    // res.status("admin is here");
    return res.status(200).json({
      message: "Admin login successful",
    });
  } else {
    // res.status(401).send("unauthorized");
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }
});
module.exports = router;
