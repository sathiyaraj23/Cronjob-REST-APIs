var con = require('../connection/connection.js');
var moment = require('moment');


module.exports = {

	updateStartDate: function (req, res) {
		var dateTime = moment().format('YYYY-MM-DD hh:mm:ss');
		var updatequery = "UPDATE cronlist SET StartDate='" + dateTime + "',Inprogress='1' WHERE ServerName = '" + req.body.ServerName + "' AND ApplicationName = '" + req.body.ApplicationName + "' AND  Command = '" + req.body.Command + "'";
		con.query(updatequery, function (err, result) {

			if (result.changedRows >= 1) {
				res.status(200);
				res.send({
					"ResponseCode": "200",
					"Message": "Updated Startdate Successfully"
				});

			} else {
				var insertquery = "INSERT INTO cronlist (ServerName,ApplicationName,Command,DateTime,Description,StartDate,Inprogress)VALUES('" + req.body.ServerName + "','" + req.body.ApplicationName + "', '" + req.body.Command + "', '" + req.body.DateTime + "', '" + req.body.Description + "','" + dateTime + "','1' )";
				con.query(insertquery, function (err, result) {
					if (result) {

						res.status(200);
						res.send({
							"ResponseCode": "200",
							"Message": "Created Cronjob Successfully"
						});
					} else {
						console.log(err);
					}

				});
			}
		});
	},

	updatEndDate: function (req, res) {

		var dateTime = moment().format('YYYY-MM-DD hh:mm:ss');
		var date = moment().format('YYYY-MM-DD');
		var updatequery = "UPDATE cronlist SET LastExecutedDate='" + dateTime + "',Inprogress='0' WHERE ServerName = '" + req.body.ServerName + "' AND ApplicationName = '" + req.body.ApplicationName + "' AND  Command = '" + req.body.Command + "' ";
		con.query(updatequery, function (err, result) {
			if (result) {
				res.status(200);
				res.send({
					"ResponseCode": "200",
					"Message": "Updated Enddate Successfully"
				});

			} else {

				res.status(100);
				res.send({
					"ResponseCode": "100",
					"Message": "Update Failed"
				});
			}
		});

	}

}


