const express = require('express');
const { Patient, Prescription, Note } = require('../models/hospital');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './upload/file');
    },
    filename: (req, file, cb)=>{
        cb(null,new Date().getTime()+ req.user.prefix + req.user.name + req.body.title + file.originalname)
    }
});
const upload = multer({storage: storage});

const { ensureAuth } = require('../config/auth')


router.get('/:pid', ensureAuth, (req, res) => {
    const pid = req.params.pid;
    Patient.findOne({_id: pid}, (err, patient)=>{
        if(patient){
            res.render('patient', {User: req.user, Patient: patient});
        }else{
             res.redirect('/port');
        }
    })
});
router.post('/:pid', ensureAuth, (req, res) => {
    console.log(req.body)
    const pid = req.params.pid;
    Patient.findOne({_id: pid}, (err, patient)=>{
        if(patient){
            const newpres = new Prescription({
                staff: req.user.prefix + '. ' + req.user.name,
                patient: patient.name,
                drug: req.body.drug,
                howmany: req.body.dose,
                note: req.body.prescnote
            });
            req.user.prescription.push(newpres);
            patient.pres.push(newpres);
            req.user.save();
            patient.save();
            req.flash('success_msg', 'successfully prescribed')
             res.redirect('/patient/' + pid);
        }else{
             res.redirect('/port');
        }
    })
});
router.post('/:pid/nursenote', ensureAuth, (req, res) => {
    console.log(req.body);
    const pid = req.params.pid;
    Patient.findOne({_id: pid}, (err, patient)=>{
        if(patient){
        const newnote = new Note({
            name: req.body.title,
            note: req.body.nursenote,
            staff: req.user.prefix + '. ' + req.user.name
        })
        req.user.notes.push(newnote);
        patient.notes.push(newnote);
        req.user.save();
        patient.save();
        req.flash('success_msg', 'New Vist Note Added ' + req.user.prefix + '. ' + req.user.name)
         res.redirect('/patient/' + pid);
        }else{
            res.redirect('/port');
        }
    });
});
router.post('/:pid/doctornote', ensureAuth, upload.single('dfiles'), (req, res) => {
    const pid = req.params.pid;
    Patient.findOne({_id: pid}, (err, patient)=>{
        if(patient){
        const newnote = new Note({
            name: req.body.title,
            note: req.body.doctornote,
            staff: req.user.prefix + '. ' + req.user.name,
            img: req.file.path
        })
        req.user.notes.push(newnote);
        patient.notes.push(newnote);
        req.user.save();
        patient.save();
        req.flash('success_msg', 'New Vist Note Added ' + req.user.prefix + '. ' + req.user.name)
         res.redirect('/patient/' + pid);
        }else{
            res.redirect('/port');
        }
    });
});
router.post('/:pid/scientistnote', ensureAuth, upload.single('dfiles'), (req, res) => {
    const pid = req.params.pid;
    Patient.findOne({_id: pid}, (err, patient)=>{
        if(patient){
        const newnote = new Note({
            name: req.body.title,
            note: req.body.scientistnote,
            staff: req.user.prefix + '. ' + req.user.name,
            img: req.file.path
        })
        req.user.notes.push(newnote);
        patient.notes.push(newnote);
        req.user.save();
        patient.save();
        req.flash('success_msg', 'New Vist Note Added ' + req.user.prefix + '. ' + req.user.name)
         res.redirect('/patient/' + pid);
        }else{
            res.redirect('/port');
        }
    });
});


module.exports = router;
