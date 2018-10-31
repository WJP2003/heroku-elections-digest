// index.js

var http = require('http');
var https = require('https');
var fs = require('fs');
var port = process.env.PORT || 8080;

var house_districts = [['AL', 7],['AK', 1],['AZ', 9],['AR', 4],['CA', 53],['CO', 7],['CT', 5],['DE', 0],['FL',27],['GA',14],['HI',2],['ID',2],['IL',18],['IN',9],['IA',4],['KS',4],['KY',6],['LA',6],['ME',2],['MD',8],['MA',9],['MI',14],['MN',8],['MS',4],['MO',8],['MT',1],['NE',3],['NV',4],['NH',2],['NJ',12],['NM',3],['NY',27],['NC',13],['ND',1],['OH',16],['OK',5],['OR',5],['PA',18],['RI',2],['SC',7],['SD',1],['TN',9],['TX',36],['UT',4],['VT',1],['VA',11],['WA',10],['WV',3],['WI',8],['WY',1]]

http.createServer(function (req, res) {
	console.log("createServer()");
	if(req.url != '/') {
		console.log("req.url != '/'");
		if(req.url.substring(0,6) == '/index') {
			console.log("req.url.substring(0,6) == 'index'");
			res.writeHead(302, {'Location': '/','Content-Type': 'text/html'});
			res.write("<html><body style='font-family:Verdana;font-size:5vw;font-weight:bold;'>302<br>Redirecting to <a href=\"/\">here</a></body></html>", function() {
				res.end();
			});
		} else {
			console.log("req.url == '/'");
			path = req.url.substring(1,req.length);
			fs.access(path,fs.constants.R_OK,function(err) {
				if(!err) {
					console.log("!err");
					fs.readFile(path,function(err2,data) {
						console.log("fs.readFile");
						if(!err2) {
							console.log("!err2");
							res.writeHead(200, {'Content-Type': ('text/' + req.url.slice(req.url.lastIndexOf('.')+1,req.url.length))});
							res.write(data,function() {
								res.end();
							});
						} else {
							console.log("err2");
							res.writeHead(500, {'Content-Type': 'text/html'});
							res.write("<html><body style='font-family:Verdana;font-size:5vw;font-weight:bold;'>500<br>Internal Server Error<br><br>" + err + "</body></html>", function() {
								res.end();
							});
						}
					});
				} else {
					console.log("err");
					res.writeHead(404, {'Content-Type': 'text/html'});
					res.write("<html><body style='font-family:Verdana;font-size:5vw;font-weight:bold;'>404<br>Not Found<br><br>" + err + "</body></html>", function() {
						res.end();
					});
				}
			});
		}
	} else {
		fs.access('index.html',fs.constants.R_OK,function(err) {
			if(!err) {
				fs.readFile('index.html',function(err2,data2) {
					if(!err2) {
						res.writeHead(200, {'Content-Type': 'text/html'});
						res.write(data2,function() {
							res.end();
						});
					} else {
						res.writeHead(500, {'Content-Type': 'text/html'});
						res.write("<html><body style='font-family:Verdana;font-size:5vw;font-weight:bold;'>500<br>Internal Server Error<br><br>" + err2 + "</body></html>", function() {
							res.end();
						});
					}
				});
			} else {
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.write("<html><body style='font-family:Verdana;font-size:5vw;font-weight:bold;'>404<br>Not Found<br><br>" + err + "</body></html>", function() {
					res.end();
				});
			}
		});
	}
}).listen(port);


racesDownload = function() {
	console.log("races_download()");
	https.get('https://www.cookpolitical.com/ratings/house-race-ratings', function(resp) {
		//console.log("house ratings downloading");
		data3 = '';
	
		resp.on('data',function(chunk) {
			data3 += chunk;
		});
		
		resp.on('end',function() {
			//console.log("house ratings downloaded");
			
			https.get('https://www.cookpolitical.com/ratings/senate-race-ratings', function(resp2) {
				//console.log("senate ratings downloading");
				data4 = '';
				
				resp2.on('data',function(chunk) {
					data4 += chunk;
				});
				
				resp2.on('end',function() {
					//console.log("senate ratings downloaded");
								
					houseSolidR = [];
					houseLikelyR = [];
					houseLeanR = [];
					houseTossup = [];
					houseLeanD = [];
					houseLikelyD = [];
					houseSolidD = [];
								
					for(j = 0;j < house_districts.length;j++) {
						//console.log("parsing house");
						for(i = 1;i <= house_districts[j][1];i++) {
							ii = i
							
							if(i < 10) { ii = "0" + i }
							if(house_districts[j][1] == 1) { ii = "AL" } 
							
							str2 = data3.slice(0,data3.lastIndexOf(house_districts[j][0] + "-" + ii));
							str3 = str2.slice(0,str2.lastIndexOf("</p>"));
							str4 = str3.slice(str3.lastIndexOf("solid-seats-modal-in-title"),str3.length);
							str5 = str4.slice(str4.lastIndexOf(">")+1,str4.length);
														
							if(str5 == "Solid Republican") {
								houseSolidR.push(house_districts[j][0] + "-" + ii);
							} else if(str5 == "Likely Republican") {
								houseLikelyR.push(house_districts[j][0] + "-" + ii);
							} else if(str5 == "Lean Republican") {
								houseLeanR.push(house_districts[j][0] + "-" + ii);
							} else if(str5 == "Toss-Up Republican") {
								houseTossup.push(house_districts[j][0] + "-" + ii);
							} else if(str5 == "Toss-Up Democratic") {
								houseTossup.push(house_districts[j][0] + "-" + ii);
							} else if(str5 == "Lean Democratic") {
								houseLeanD.push(house_districts[j][0] + "-" + ii);
							} else if(str5 == "Likely Democratic") {
								houseLikelyD.push(house_districts[j][0] + "-" + ii);
							} else if(str5 == "Solid Democratic") {
								houseSolidD.push(house_districts[j][0] + "-" + ii);
							}
						}
					}
					
					senateSolidR = [];
					senateLikelyR = [];
					senateLeanR = [];
					senateTossup = [];
					senateLeanD = [];
					senateLikelyD = [];
					senateSolidD = [];
					
					for(j = 0;j < house_districts.length;j++) {
						//console.log("parsing senate");
						for(i = 1;i <= 2;i++) {
							if(data4.lastIndexOf(">" + house_districts[j][0] + "-") != -1) {
								str2 = data4.slice(0,data4.lastIndexOf(">" + house_districts[j][0] + "-"));
								str3 = str2.slice(str2.lastIndexOf('<div class="ratings-detail-page-table-7-column">',str2.length));
								str4 = ''
								if(str3.split('<ul class="ratings-detail-page-table-7-column-ul">') == 1) {
									str4 = str3.slice(str3.indexOf('<p class="ratings-detail-page-table-7-column-cell-title">'),str3.indexOf('</p>'));
								} else {
									str4 = str3.slice(str3.lastIndexOf('<p class="ratings-detail-page-table-7-column-cell-title">'),str3.lastIndexOf('</p>'));
								}
								str5 = str4.replace('<p class="ratings-detail-page-table-7-column-cell-title">','');
								console.log(house_districts[j][0] + "-" + i + " - " + str5);
							} else {
								console.log(house_districts[j][0] + "-" + i + " - N/A");
							}
						}
					}
					
					strHouseSolidR = "['" + houseSolidR.join("','") + "']" ;
					strHouseLikelyR = "['" + houseLikelyR.join("','") + "']";
					strHouseLeanR = "['" + houseLeanR.join("','") + "']";
					strHouseTossup = "['" + houseTossup.join("','") + "']";
					strHouseLeanD = "['" + houseLeanD.join("','") + "']";
					strHouseLikelyD = "['" + houseLikelyD.join("','") + "']";
					strHouseSolidD = "['" + houseSolidD.join("','") + "']";
					
					fs.access("house_districts.js",fs.constants.W_OK,function(err) {
						if(!err) {
							console.log("writing house to file");
							fs.writeFile("house_districts.js",
									"(function() { \n" +
									"houseSolidR = " + strHouseSolidR + ",\n" +
									"houseLikelyR = " + strHouseLikelyR + ",\n" +
									"houseLeanR = " + strHouseLeanR + ",\n" +
									"houseTossup = " + strHouseTossup + ",\n" +
									"houseLeanD = " + strHouseLeanD + ",\n" +
									"houseLikelyD = " + strHouseLikelyD + ",\n" +
									"houseSolidD = " + strHouseSolidD + "\n" +
									"})(); \n",
									function(errrr) {
										data3 = '';
										if(errrr) {
											console.log("Error writing to pvi file: " + errrr);
										}
							});
						} else {
							console.log("Could not open pvi file: " + err);
						}
					});
					
					strSenateSolidR = "['" + senateSolidR.join("','") + "']" ;
					strSenateLikelyR = "['" + senateLikelyR.join("','") + "']";
					strSenateLeanR = "['" + senateLeanR.join("','") + "']";
					strSenateTossup = "['" + senateTossup.join("','") + "']";
					strSenateLeanD = "['" + senateLeanD.join("','") + "']";
					strSenateLikelyD = "['" + senateLikelyD.join("','") + "']";
					strSenateSolidD = "['" + senateSolidD.join("','") + "']";

					fs.access("senate_ratings.js",fs.constants.W_OK,function(err) {
						if(!err) {
							console.log("writing senate to file");
							fs.writeFile("senate_ratings.js",
									"(function() { \n" +
									"senateSolidR = " + strSenateSolidR + ",\n" +
									"senateLikelyR = " + strSenateLikelyR + ",\n" +
									"senateLeanR = " + strSenateLeanR + ",\n" +
									"senateTossup = " + strSenateTossup + ",\n" +
									"senateLeanD = " + strSenateLeanD + ",\n" +
									"senateLikelyD = " + strSenateLikelyD + ",\n" +
									"senateSolidD = " + strSenateSolidD + "\n" +
									"})(); \n",
									function(errrr) {
										data4 = '';
										if(errrr) {
											console.log("Error writing to pvi file: " + errrr);
										}
							});
						} else {
							console.log("Could not open pvi file: " + err);
						}
					});

				});
			});
		});
	});
}


racesDownload();
setInterval(racesDownload,300000);
