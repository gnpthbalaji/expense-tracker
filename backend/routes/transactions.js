const router = require('express').Router();
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

router
    .post('/addincome', addIncome)
    .get('/getincome', limiter, getIncome)
    .delete('/deleteincome/:id', limiter, deleteIncome)
    .post('/addexpense', addExpense)
    .get('/getexpense', limiter, getExpense)
    .delete('/deleteexpense/:id', limiter, deleteExpense);

module.exports = router;