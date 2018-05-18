const express = require('express');
const router = express.Router();
const user = require('../controllers/userController.js');

    //create a new user
    router.post('/login', user.create);

    //Retrieve all users
    // router.get('/user', user.findAll);

     //Retrieve a single user with userId
     router.get('/:userId', user.findOne);

    // //Update a user with userId
    // router.put('/user/:userId', user.update);

    // //Delete a user with userId
    // router.delete('/user/:userId', user.delete);

module.exports = router;