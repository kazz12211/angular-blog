const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/signin', (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if(err) {
            console.error(err);
            res.status(401).send('Authentication failed');
        } else if(!user) {
            res.status(401).send('Authentication failed');
        } else {
            const userId = user._id;
            const match = bcrypt.compareSync(password, user.password);
            if(match) {
                const payload = {
                    subject: userId
                };
                const token = jwt.sign(payload, config.jwt.secretKey);
                res.json({token: token, username: user.name});
            } else {
                res.status(401).send('Authentication failed');
            }
        }
    });

});

module.exports = router;