const express = require("express");
const router = express.Router();

const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
    console.log("REGISTER HIT");
console.log(req.body);
    try {
        const user = await User.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            email,
            password
        });

        if (user) {
            res.json({
                success: true,
                user
            });
        } else {
            res.json({
                success: false
            });
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;