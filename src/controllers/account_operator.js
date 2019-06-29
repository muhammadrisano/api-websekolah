account_operatorModel = require('../models/account_operator')
MiscHelper = require('../helpers/helpers')
module.exports = {
    getAccount_operator: (req, res) => {
        account_operatorModel.getAccount_operator()
            .then((resultAccount_operator) => {
                result = resultAccount_operator;
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            });

    }
}