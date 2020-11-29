const express = require('express');
const router = express.Router();
const mongo = require('../../database/mongo_db');
const validation = require('../../utils/validator');

router.post('/login', (req, res) => {
    const payload = {
        mobile: req.body.mobile,
        password: req.body.password
    };

    const loginValidation = validation.sellerLogin(req.body);
    if (Object.keys(loginValidation).length !== 0) {
        res.status(400).json(loginValidation);
    } else {
        mongo.authentication('user', payload)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(401).json(err))
    }
});

module.exports = router;