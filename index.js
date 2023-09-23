
const checkAdmin = (req, res, next) => {
    if (req.query.admin === 'true') {
        next();
    } else {
        res.status(400).send('should be admin');
    }
}


const makeUpperCase = (req, res, next) => {
    const student = req.body;
    if (req.body.fname === undefined || req.body.mname === undefined || req.body.lname === undefined) {
        return res.send('Please enter a valid name');
    }
    req.body.fname = student.fname.toUpperCase();
    req.body.mname = student.mname.toUpperCase();
    req.body.lname = student.lname.toUpperCase();
    next();
}

module.exports = {
    checkAdmin, 
    makeUpperCase
}