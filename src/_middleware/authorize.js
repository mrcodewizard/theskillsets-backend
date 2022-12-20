const jwt = require('jsonwebtoken');
const { secret } = require('../../config.json');
const { db } = require('../models');

const Authorize = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token)
            return res.status(400).json({
                success: false,
                result: null,
                message: 'No authentication token, authorization denied.',
                jwtExpired: true,
            });

        const verified = jwt.verify(token, secret);

        if (!verified)
            return res.status(401).json({
                success: false,
                result: null,
                message: 'Token verification failed, authorization denied.',
                jwtExpired: true,
            });

        // @ts-ignore
        const user = await db.users.findOne({ id: Number(verified.id) });
        if (!user) {
            return res.status(401).json({
                success: false,
                result: null,
                message: "user doens't Exist, authorization denied.",
                jwtExpired: true,
            });
        }
        else {
            req.user = user;
            next();
        }
    } catch (err) {
        res.status(503).json({
            success: false,
            result: null,
            message: err?.message,
            error: err,
        });
    }
}

module.exports = Authorize;