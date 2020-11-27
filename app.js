//jsint es6
const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const { Note, Prescription, Patient, Ward, Nurse, Doctor, Hospital} = require('./models/hospital');



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost:27017/ivorycloudDB', {useNewUrlParser: true, useUnifiedTopology: true});


app.route('/')
    .get((req, res)=>{
        res.send("Ivory cloud Back end");
    });






app.listen(3000, () => {
    console.log(`Server started on 3000`);
});