//jsint es6
const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost:27017/ivorycloudDB', {useNewUrlParser: true, useUnifiedTopology: true});

////////////////////////////////////////// Patient Schema //////////////////////////////////////////////////////////////////
const patientSchema = new mongoose.Schema({
    prefix: String,
    name: String,
    patientimg: String,
    age: Number,
    height: Number,
    weight: Number,
    bmi: Number,
    admitted: Boolean,
    ward: String,
    illness: String
});

const patient = mongoose.model("patient", patientSchema);

/////////////////////////////////// notes SChema ////////////////////////////
const noteSchema = new mongoose.Schema({
    name: String,
    created: Date,
    note: String,
    staff: String,
});

const note = mongoose.model("note", noteSchema);

////////////////////////////// prescription Schema //////////////////////////////////
const presSchema = new mongoose.Schema({
    drug: String,
    howmany: Number,
    times: Number,
    interval: String
});

const prescription = mongoose.model("prescription", presSchema);

///////////////////////////////// Doctor Schema ///////////////////////////////////////////////////////////////////////////////////
const doctorSchema = new mongoose.Schema({
    prefix: String,
    suffix: String,
    name: String,
    docimg: String,
    adminRole: String,
    created: Date,
    notes: [noteSchema],
    prescription: [presSchema]
});

const doctor = mongoose.model("doctor", doctorSchema);

//////////////////////////////// Nurse Schema //////////////////////////////////////////////////////////////////////////////////////
const nurseSchema = new mongoose.Schema({
    prefix: String,
    suffix: String,
    name: String,
    nurseimg: String,
    adminRole: String,
    created: Date,
    notes: [noteSchema],
    prescription: [presSchema]
});

const nurse = mongoose.model("nurse", doctorSchema);

/////////////////////////////////// Ward Schema /////////////////////////////////////////////////////////////////////////
const wardSchema = new mongoose.Schema({
    name: String,
    patients: [patientSchema],
    doctors: [doctorSchema],
    nurse: [nurseSchema]
});

const ward = mongoose.model("ward", wardSchema);

//////////////////////////////////// Hospital Schema /////////////////////////////////////////////////////////////////
const hospitalSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    created: Date,
    amountOfStaff: Number,
    totalPatients: Number,
    totalAmountOfBeds: Number,
    wards: [wardSchema],
    doctors: [doctorSchema],
    nurse: [nurseSchema],
    patients: [patientSchema]
  });
  
  const Hospital = mongoose.model("hospital", hospitalSchema);



app.route('/')
    .get((req, res)=>{
        res.send("Ivory cloud Back end");
    });








app.listen(3000, () => {
    console.log(`Server started on 3000`);
});