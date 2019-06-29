express = require('express')
Route = express.Route()
account_operatorController = require('../controllers/account_operator')

Route
    .get('/', account_operatorController.getAccount_operator)
    .get('/:id', account_operatorController.detailAccount_operator)
    .post('/', account_operatorController.insertAccount_operator)
    .patch('/:id', account_operatorController.updateAccount_operator)
    .delete('/:id', account_operatorController.deleteAccount_operator)

module.exports = Route;