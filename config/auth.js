module.exports = {
    ensureAuth: (req, res, next)=>{
        if(req.isAuthenticated()){
            return next()
        }
        res.redirect('/staff/login');
        
    },
    keepOutAuth: (req, res, next)=>{
        if(req.isAuthenticated()){
             res.redirect('/port');
        }else{
            return next()
        }
    }
}