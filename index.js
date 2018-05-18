const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = express.Router();
var users = require('./app/routes/users');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use('/users', users);

//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }))

// define a simple route
app.get('/', (req, res)=> {
    res.json({'message':'shipon on app'});
})
// var loginController = require('./controller/loginController');
// app.set('view engine','ejs');
// app.use(express.static('./public'));
// loginController(app);

// listen for requests
app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})