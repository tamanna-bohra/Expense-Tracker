const router=require('express').Router()
const { addExpense, deleteExpense, getExpense } = require('../controllers/expense');
const {addIncome}=require('../controllers/income');
const {getIncomes}=require('../controllers/income');
const {deleteIncome}=require('../controllers/income')
router.post('/add-income',addIncome)
        .get('/get-incomes',getIncomes)
        .delete('/delete-income/:id',deleteIncome)
        .post('/add-expense',addExpense)
        .get('/get-expenses',getExpense)
        .delete('/delete-expense/:id',deleteExpense)

module.exports=router