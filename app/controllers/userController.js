const User = require('../models/userModel');
const dbConfig = require('../../config/database.config.js');

var mangoose = require('mongoose');
mangoose.connect(dbConfig.url, function(err){
  if(err){
    throw err;
  }
});

exports.create = (req, res) => {
    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {
        var userData = new User( {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          passwordConf: req.body.passwordConf});
        
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
          if (err) {
            return res.send(err);
          } else {
            return res.send({message: 'user created in db'});
          }
        });
        
      } else {
        return res.send({error:'Invalid credentials'});
      }
};

exports.findOne = (req, res) => {
  User.findById('5afe5d0aea4e42477cbf8aed', function(err, user) {
    if (err) throw err;
    res.send({message:user});
});
  
};