var express = require('express');
var router = express.Router();
var udpateCronJob = require('./cronjob.model.js');


router.put('/startCron', function (req, res) {
    udpateCronJob.startCron(req, res);

});



router.put('/endCron', function (req, res) {

    udpateCronJob.endCron(req, res);

});

module.exports = router;
