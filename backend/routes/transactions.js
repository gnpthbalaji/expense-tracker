const router = require('express').Router();
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');

router
    .post('/addincome', addIncome)
    .get('/getincome', getIncome)
    .delete('/deleteincome/:id', deleteIncome)
    .post('/addexpense', addExpense)
    .get('/getexpense', getExpense)
    .delete('/deleteexpense/:id', deleteExpense);

module.exports = router;