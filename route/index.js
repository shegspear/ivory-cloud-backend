const express = require('express');
const { ensureAuth } = require('../config/auth');
const router = express.Router();
const multer = require('multer');
const { Hospital, Patient, User } = require('../models/hospital');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './upload/patient');
    },
    filename: (req, file, cb)=>{
        cb(null,new Date().getTime() + file.originalname)
    }
});
const upload = multer({storage: storage});


router.route("/")
    .get((req, res)=>{
        res.render('home');
    });
router.route("/port")
    .get(ensureAuth, (req, res)=>{
        if(req.user.position === 'unknown' || req.user.speciality === 'unknown'){
             res.redirect('/staff/page2');
        } else if(!req.user.hospitalverified){
             res.render('verify');
        } else if (req.user.position === 'Receptionist'){
            res.redirect('/recept');
        }else{
            Hospital.findOne({name: req.user.hospital}, (err, hospital)=>{
                if(hospital){
                    res.render('port',{user: req.user, patient: hospital.patients});
                }
            })
            
        }
    })
router.route('/recept')
    .get(ensureAuth, (req, res)=>{
        res.render('reception', {user: req.user});
    })
    .post(upload.single('patient-pic'), (req, res)=>{
        const {id, name, email, dob, tel, lga, address, kin, bloodGroup, height, weight, gender} = req.body;
        console.log(req.file);
        Hospital.findOne({name: req.user.hospital}, (err, hospital)=>{
            if(hospital){
                const newPatient = new Patient({
                    patientId: id,
                    name: name,
                    patientimg: req.file.path,
                    email: email,
                    tel: tel,
                    dob: dob,
                    lga: lga,
                    address: address,
                    bloodtype: bloodGroup,
                    nok: kin,
                    height: height,
                    weight: weight,
                    gender: gender
                });
                hospital.patients.push(newPatient);
                hospital.save();
                newPatient.save();
                req.flash('success_msg', 'Patient Sucessfully Registered');
                res.redirect('/recept');
            }else if(err){
                req.flash('error_msg', 'an  error occured in the system');
                res.redirect('/recept');
            }
        })
    });
router.route('/hospital/verify/:token')
    .get((req, res)=>{
        const accessToken = req.params.token
        User.findOne({secretToken: accessToken}, (err, user)=>{
            if(user){
                user.hospitalverified = true;
                user.secretToken = "";
                user.save();
                res.render('verified', {User: user});
            }else{
                res.send('<h1>Link Has Expired</h1>');
            }
        })
    });
    router.route('/hospital/deny/:token')
    .get((req, res)=>{
        const accessToken = req.params.token
        console.log(accessToken)
        User.findOneAndDelete({secretToken: accessToken}, (errs, user)=>{
            if(user){
                res.render('verified', {User: user});
            }
        });
        
    });
module.exports = router;