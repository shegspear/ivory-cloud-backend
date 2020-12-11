//jsint es6
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const { Note, Prescription, Patient, Ward, User, Hospital} = require('./models/hospital');

require('./config/passport')(passport);


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use("/upload", express.static("upload"));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect('mongodb://localhost:27017/ivorycloudDB', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(flash());

// global vars
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})
// Route
app.use('/', require('./route/index'));
app.use('/staff', require('./route/staff'));
app.use('/patient', require('./route/patients'));

// let newHospital = new Hospital({
//     name: 'Ivory Cloud',
//     email: 'faniogor@gmail.com',
//     address: 'Lagos, Nigeria',
//     amountOfStaff: 200,
//     totalPatients: 500,
//     totalAmountOfBeds: 150,
// });

// newHospital.save();



app.listen(3000, () => {
    console.log(`Server started on 3000`);
});