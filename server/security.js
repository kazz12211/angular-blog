const jwt = require('jsonwebtoken');
const config = require('./config');

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    const token = req.headers.authorization.split(' ')[1];
    if(token === null) {
        return res.status(401).send('Unauthorized request');
    }
    try {
        const payload = jwt.verify(token, config.jwt.secretKey);
        if(!payload) {
            return res.status(401).send('Unauthorized request');
        }
        req.userId = payload.subject;
        next();
    } catch(err) {
        return res.status(401).send('Unauthorized request');
    }
}

function getUserId(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        if (token !== null) {
            try {
                const payload = jwt.verify(token, config.jwt.secretKey);
                if (payload) {
                    req.userId = payload.subject;
                }
            } catch (err) { }
        }
    }
    next();
}

module.exports = {verifyToken, getUserId};