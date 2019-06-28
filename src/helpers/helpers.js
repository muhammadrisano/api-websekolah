module.exports = {
    response: (res, result, status, data) => {
        let resultPrint = {}
        if (result.affectedRows > 0) {
            resultPrint.status = "Success";
            resultPrint.status_code = 200;
            if (result.insertId > 0) {
                resultPrint.message = "Data Success Created !!";
                resultPrint.insertData = data;
            } else if (result.changedRows > 0) {
                resultPrint.message = "Data Success Update !!";
            } else {
                resultPrint.message = "Data success Deleted !!";
            }
        } else if (result.length == 1) {
            resultPrint.status = "Success";
            resultPrint.status_code = 200;
            resultPrint.result = result[0];
        } else if (result.length > 0) {
            resultPrint.status = "Success";
            resultPrint.status_code = 200;
            resultPrint.result = result;
        } else {
            resultPrint.status = "Not Success";
            resultPrint.status_code = 404;
            resultPrint.message = "Data Not Found !!";
        }
        return res.status(resultPrint.status_code).json(resultPrint);
    }
}