const cookieSession = (req, res, next) => {
    if(req.cookies.Rose){
       req.session.user = req.cookies.Rose;
       res.locals.user = req.session.user;
   } 
   next()
}

module.exports = cookieSession;
