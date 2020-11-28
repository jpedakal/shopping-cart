const express = require('express');
const passport = require('passport');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();

require('./src/config/passport')(passport);

// Database connection
const mongo = require('./src/database/mongo_db');

// route files
const seller_register = require('./src/api/seller/registration');
const seller_login = require('./src/api/seller/login');
const user_register = require('./src/api/user/registration');
const user_login = require('./src/api/user/login');
const add_product = require('./src/api/seller/add_product');
const fetch_product = require('./src/api/seller/fetch_product');
const update_product = require('./src/api/seller/update_product');
const delete_product = require('./src/api/seller/delete_product');
const fetch_product_user = require('./src/api/user/fetch_product');
const add_to_cart = require('./src/api/user/add_to_cart');
const cart_data = require('./src/api/user/cart_data');
const current = require('./src/api/user/current');
const update_pwd = require('./src/api/seller/update_pwd');
const reset_pwd = require('./src/api/seller/reset_pwd');
const purchase = require('./src/api/user/purchase');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// middleware routes
app.use('/api/seller', seller_register);
app.use('/api/seller', seller_login);
app.use('/api/seller', add_product);
app.use('/api/seller', fetch_product);
app.use('/api/seller', update_product);
app.use('/api/seller', delete_product);
app.use('/api/seller', update_pwd);
app.use('/api/user', user_register);
app.use('/api/user', fetch_product_user);
app.use('/api/user', user_login);
app.use('/api/user', add_to_cart);
app.use('/api/user', cart_data);
app.use('/api/user', current);
app.use('/api/user', purchase);
app.use('/api/seller', reset_pwd);

// port
const Port = process.env.PORT || 3000;

// start server
app.listen(Port, () => {
    console.log(`server running on port ${Port}`);
});

try {
    return new Promise((resolve, reject) => {
        mongo.connect();
    })
}
catch (err) {
    console.log('Error while connecting Database' + err);
}