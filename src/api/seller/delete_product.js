const express = require('express');
const router = express.Router();
const mongo = require('../../database/mongo_db');
const passport = require('passport');
const ObjectId = require('mongodb').ObjectID;
const isAdmin = require('../../config/admin');

router.delete('/delete_product/:id', (req, res) => {
    const FilterCondition = {
        _id: ObjectId(req.params.id)
    };

    mongo.deleteDocument('products', FilterCondition)
        .then(data => res.status(200).json(data))
        .catch(err => res.json(err));
});

module.exports = router;