const mongoose = require('mongoose');

/////////////////////////////////// notes SChema ////////////////////////////
const noteSchema = new mongoose.Schema({
    name: String,
    created: {
        type: Date,
        default: Date.now()
    },
    note: String,
    staff: String,
    img: String
});

const Note = mongoose.model("note", noteSchema);

////////////////////////////// prescription Schema //////////////////////////////////
const presSchema = new mongoose.Schema({
    staff: String,
    patient: String,
    drug: String,
    howmany: String,
    note: String,
    interval: String,
    presAt: {
        type: Date,
        default: Date.now()
    }
});

const Prescription = mongoose.model("prescription", presSchema);

////////////////////////////////////////// Patient Schema //////////////////////////////////////////////////////////////////
const patientSchema = new mongoose.Schema({
    patientId: String,
    name: String,
    patientimg: String,
    email: String,
    tel: Number,
    dob: Date,
    lga: String,
    address: String,
    bloodtype: String,
    nok: String,
    age: Number,
    height: Number,
    weight: Number,
    bmi: Number,
    admitted: {
        type: Boolean,
        default: false
    },
    ward: String,
    illness: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    gender: String,
    pres: [presSchema],
    notes: [noteSchema]
});

const Patient = mongoose.model("patient", patientSchema);


//////////////////////////////// user Schema ///////////////////////////////////////////////////////////////////////////////////
const userSchema = new mongoose.Schema({
    prefix: String,
    suffix: String,
    name: String,
    email: String,
    password: String,
    hospital: {
        type: String,
        default: 'Ivory Cloud'
    },
    userimg: String,
    gender: String,
    position: {
        type: String,
        default: 'unknown'
    },
    speciality: {
        type: String,
        default: 'unknown'
    },
    userverified:{
        type: Boolean,
        default: false
    },
    hospitalverified:{
        type: Boolean,
        default: false
    },
    tel: {
        type: String,
        default: 'unknown'
    },
    secretToken: String,
    created: { 
        type: Date,
        default: Date.now 
    },
    notes: [noteSchema],
    prescription: [presSchema]
});

const User = mongoose.model("user", userSchema);


/////////////////////////////////// Ward Schema /////////////////////////////////////////////////////////////////////////
const wardSchema = new mongoose.Schema({
    name: String,
    patients: [patientSchema],
    users: [userSchema],
});

const Ward = mongoose.model("ward", wardSchema);


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
    users: [userSchema],
    patients: [patientSchema]
});
  
const Hospital = mongoose.model("hospital", hospitalSchema);

module.exports = { Hospital, User, Ward, Note, Prescription, Patient };

