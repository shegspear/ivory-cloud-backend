const mongoose = require('mongoose');

/////////////////////////////////// notes SChema ////////////////////////////
const noteSchema = new mongoose.Schema({
    name: String,
    created: Date,
    note: String,
    staff: String,
});

const Note = mongoose.model("note", noteSchema);

////////////////////////////// prescription Schema //////////////////////////////////
const presSchema = new mongoose.Schema({
    drug: String,
    howmany: Number,
    times: Number,
    interval: String
});

const Prescription = mongoose.model("prescription", presSchema);

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

const Patient = mongoose.model("patient", patientSchema);


//////////////////////////////// Doctor Schema ///////////////////////////////////////////////////////////////////////////////////
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

const Doctor = mongoose.model("doctor", doctorSchema);


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

const Nurse = mongoose.model("nurse", nurseSchema);

/////////////////////////////////// Ward Schema /////////////////////////////////////////////////////////////////////////
const wardSchema = new mongoose.Schema({
    name: String,
    patients: [patientSchema],
    doctors: [doctorSchema],
    nurse: [nurseSchema]
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
    doctors: [doctorSchema],
    nurse: [nurseSchema],
    patients: [patientSchema]
});
  
const Hospital = mongoose.model("hospital", hospitalSchema);

module.exports = Hospital;
module.exports = Nurse;
module.exports = Doctor;
module.exports = Ward;
module.exports = Note;
module.exports = Prescription;
module.exports = Patient;

