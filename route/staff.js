const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const randomString = require('randomstring');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './upload/staff/');
    },
    filename: (req, file, cb)=>{
        cb(null, new Date().getTime() + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    }else{
        req.flash('error_msg', "Your Image should be in png/jpeg format");
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
    fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
});

const {User, Hospital} = require('../models/hospital');
const { keepOutAuth, ensureAuth } = require('../config/auth');
const info = require('../misc/mail');

router.get("/register", keepOutAuth, (req, res)=>{
    res.render('signup');
});
router.post('/register', (req, res)=>{
    const {name, email, password, agree} = req.body;
    console.log(req.body);
    let errors = [];
    let token = randomString.generate({
        length: 200,
        charset: 'alphanumeric'
    });
    if(!name || !email || !password){
        errors.push({msg: 'All fields are required'});
    }else if (password.length < 8) {
        errors.push({msg: 'Please your password should be greater than 8 digits'});
    }else if (!agree){
        errors.push({msg: 'You must agree to our terms and conditions'});
    }else{
        let cmail = email.search('@');
        if(cmail < 1){
            errors.push({msg: 'Input a valid Email'})
        }
    }
    if (errors.length > 0){
        res.render('signup', {
            errors,
            name,
            email,
            password,
            agree
        });
    }else{
        User.findOne({email: email}, (err, user)=>{
            if(err){
                console.log(err);
            }
            if (user) {
                errors.push({msg: 'Staff Already Exist'});
                res.render('signup', {
                    errors,
                    name,
                    email,
                    password,
                    agree
                });
            }else{
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password,
                    secretToken: token,
                });
                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        if(err){
                            console.log(err);
                            
                        }
                        newUser.password = hash;
                        newUser.save();
                        req.flash('success_msg', 'You are registered');
                        res.redirect('/staff/login');
                    })
                });
                info(email, 'Verification', `<!doctype html>
                <html>
                    <head>
                        <meta charset="utf-8">
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
                            p{
                                color: black;
                                font-family: inter;
                                font-weight: 500;
                                font-size: 16px;
                            }
                            .submit{
                                font-family: 'Inter';
                                border: none;
                                outline: none;
                                color: white;
                                background-color: #08AED5;
                                border-radius: 6px;
                                width: 200px;
                                height: 64px;
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                        <p>
                            Please click the button to get verified:  <Button class="submit"><a href="http://localhost:3000/staff/verified/${token}" >Please Verify</a></Button>
                            
                        </p>
                    </body>
                </html>`);
                
            }
        })
        
    }
});
router.get('/login', keepOutAuth, (req, res)=>{
    res.render('login');
});
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/port',
        failureRedirect: '/staff/login',
        failureFlash: true
    })(req, res, next)
});
router.route('/verified/:accessToken')
    .get((req, res)=>{
        const accessToken = req.params.accessToken
        User.findOne({secretToken: accessToken}, (err, user)=>{
            if(user){
                let token = randomString.generate({
                    length: 200,
                    charset: 'alphanumeric'
                })
                user.userverified = true;
                user.secretToken = token;
                user.save();
                console.log(user);
                req.flash('success_msg', 'successfully verified');
                 res.redirect('/staff/login');
            }else{
                res.send('<h1>Link Has Expired</h1>');
            }
        })
    })
router.route('/page2')
    .get(ensureAuth, (req, res)=>{
        if(req.user.position !== 'unknown'){
            res.redirect('/port');
       }else{
           res.render('page2');
       }
    })
    .post(upload.single('staffimage'), (req, res)=>{
        const {position, specialty, tel, agree, id, images, gender, } = req.body;
        let errors = [];
        if (position === '') {
            errors.push({msg: 'Please Select your position in this medical center'});
        }else if (position === 'Doctor' && specialty === '') {
            errors.push({msg: 'Please Select what kind of ' + req.body.position + ' you are'});
        }else if (tel.length > 15 || tel.length < 11){
            errors.push({msg: 'Input a valid phone number'});
        }else if (agree !== 'yes'){
            errors.push({msg: 'You have to agree with the terms and condition'});
        }
        if (errors.length > 0){
            res.render('page2', {errors});
        }else{
            if (position === 'Doctor'){
                req.user.prefix = "DR"
            }else if (position === 'Nurse') {
                req.user.prefix = "Nurse"
            }else if (position === 'LAB Scientist'){
                req.user.prefix = "Scientist"
            }else if (position === 'Pharmacist'){
                req.user.prefix = ""
            }else{
                if( gender === "Male") {
                    req.user.prefix = "MR"
                }else{
                    req.user.prefix = "Miss/Mrs"
                }
            }
            console.log(req.file);
            const hospital = req.user.hospital;
            Hospital.findOne({name: hospital}, (err, inst)=>{
                if(inst){
                    info(inst.email, 'Verify this Staff', `<!doctype html>
                    <html>
                        <head>
                            <meta charset="utf-8">
                            <style>
                                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
                                p{
                                    color: black;
                                    font-family: inter;
                                    font-weight: 500;
                                    font-size: 16px;
                                }
                                .submit{
                                    font-family: 'Inter';
                                    border: none;
                                    outline: none;
                                    color: white;
                                    background-color: #08AED5;
                                    border-radius: 6px;
                                    width: 200px;
                                    height: 64px;
                                    text-align: center;
                               }
                               .submited{
                                    font-family: 'Inter';
                                    border: none;
                                    outline: none;
                                    color: white;
                                    background-color: red;
                                    border-radius: 6px;
                                    width: 200px;
                                    height: 64px;
                                    text-align: center;
                                }
                               .sub{
                                    text-decoration: none;
                                    color: white;
                                    font-family: 'Inter';
                                    font-size: 12px;
                                    font-weight: 500px;
                               }
                            </style>
                        </head>
                        <body>
                            <p>Please view staff image in attachment</p>
                            <p>Name: ${req.user.name}</p>
                            <p>Email: ${req.user.email}</p>
                            <p>Position: ${position}</p>
                            <p>Specialty: ${specialty}</p>
                            <p>Staff Id: ${id}</p>
                            <p>Phone Number: ${tel}</p>
                            <p>Gender: ${gender}</p>
                            <a class="sub" href="http://localhost:3000/hospital/verify/${req.user.secretToken}"><button class="submit">My Staff</button></a>
                            <a class="sub" href="http://localhost:3000/hospital/deny/${req.user.secretToken}"><button class="submited">Not My Staff</button></a>
                        </body>
                    </html>`, req.file.filename, './'+req.file.path);
                }
            });
            req.user.staffId = id;
            req.user.gender = gender;
            req.user.userimg = req.file.path
            req.user.speciality = specialty;
            req.user.position = position;
            req.user.tel = tel;
            req.user.save()
            
            
            res.redirect('/staff/step3');
        }
    });

router.route('/step3')
    .get(ensureAuth, (req, res)=>{
        if(req.user.hospitalverified){
             res.redirect('/port');
        }else{
            res.render('verify');
        }
    });


module.exports = router;