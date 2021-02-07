const passport = require('passport')

module.exports = (app) =>{
    app.get('/', (req,res)=>{
        res.send("Hello")
    })
    app.get('/auth',
        passport.authenticate('google', { scope: ['profile','email'] }));

    app.get('/auth/google/callback', 
        passport.authenticate('google'))
    
    app.get('/current_user',(req,res)=>{
        res.send(req.user)
    })
    
    app.get('/api/logout',(req,res)=>{
        req.logout();
        res.redirect('/')
    })
}
