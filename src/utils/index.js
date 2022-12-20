const jwt = require('jsonwebtoken');
const config = require("../../config.json")
const utils = {
    generateJwtToken: (account) => {
        return jwt.sign({ sub: account.id, id: account.id }, config.secret, { expiresIn: '30day' });
    }

}
module.exports = utils;