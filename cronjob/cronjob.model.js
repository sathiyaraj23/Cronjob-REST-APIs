
var cronJob = require('../controllers/cronjob.js');


module.exports = {

	startCron: function (req, res) {
		try {
			cronJob.updateStartDate(req, res);
		} catch (err) {
			res.status(500);
			res.send("Internal Error");
		}
	},
	endCron: function (req, res) {
		try {
			cronJob.updatEndDate(req, res);
		} catch (err) {
			res.status(500);
			res.send("Internal Error");

		}
	}
};