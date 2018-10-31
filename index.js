// index.js

var http = require('http');
var https = require('https');
var fs = require('fs');
var port = process.env.PORT || 8080;

var house_districts = [['AL', 7],['AK', 0],['AZ', 9],['AR', 4],['CA', 53],['CO', 7],['CT', 5],['DE', 0],['FL',27],['GA',14],['HI',2],['ID',2],['IL',18],['IN',9],['IA',4],['KS',4],['KY',6],['LA',6],['ME',2],['MD',8],['MA',9],['MI',14],['MN',8],['MS',4],['MO',8],['MT',0],['NE',3],['NV',4],['NH',2],['NJ',12],['NM',3],['NY',27],['NC',13],['ND',0],['OH',16],['OK',5],['OR',5],['PA',18],['RI',2],['SC',7],['SD',0],['TN',9],['TX',36],['UT',4],['VT',0],['VA',11],['WA',10],['WV',3],['WI',8],['WY',0]]

races_download = function() {
	https.get('https://www.cookpolitical.com/ratings/house-race-ratings', function(resp) {
		data3 = '';
	
		resp.on('data',function(chunk) {
			data3 += chunk;
		});
		
		resp.on('end',function() {
			https.get('https://www.cookpolitical.com/ratings/senate-race-ratings', function(resp2) {
				data4 = '';
				
				resp2.on('data',function(chunk) {
					data4 += chunk;
				});
				
				resp2.on('end',function() {
								
					solidR = [];
					likelyR = [];
					leanR = [];
					tossup = [];
					leanD = [];
					likelyD = [];
					solidD = [];
								
					for(j = 0;j < house_districts.length;j++) {
						for(i = 1;i <= house_districts[j][1] || house_districts[j][1] == 0;i++) {
							if(house_districts[j][1] == 0) { i = 0; }
							if(i < 10) { i = "0" + i } 
							str2 = data3.slice(0,data3.lastIndexOf(house_districts[j][0] + "-" + i));
							str3 = str2.slice(0,str2.lastIndexOf("</p>"));
							str4 = str3.slice(str3.lastIndexOf("solid-seats-modal-in-title"),str3.length);
							str5 = str4.slice(str4.lastIndexOf(">")+1,str4.length);
							
							if(str5 == "Solid Republican") {
								solidR.push(house_districts[j][0] + "-" + i);
							} else {
								if(str5 == "Likely Republican") {
									likelyR.push(house_districts[j][0] + "-" + i);
								} else {
									if(str5 == "Lean Republican") {
										leanR.push(house_districts[j][0] + "-" + i);
									} else {
										if(str5 == "Toss-Up Republican") {
												tossup.push(house_districts[j][0] + "-" + i);
										} else {
											if(str5 == "Toss-Up Democratic") {
												tossup.push(house_districts[j][0] + "-" + i);
											} else {
												if(str5 == "Lean Democratic") {
													leanD.push(house_districts[j][0] + "-" + i);
												} else {
													if(str5 == "Likely Democratic") {
														likelyD.push(house_districts[j][0] + "-" + i);
													} else {
														if(str5 == "Solid Democratic") {
															solidD.push(house_districts[j][0] + "-" + i);
														}
													}
												}
											}
										}
									}
								}
							}
							if(house_districts[j][1] == 0) { break; } // for at-large districts, e.g. MT-AL
						}
					}
				
					for(j = 0;j < states.length;j++) {
						for(i = 1;i <= 2;i++) {
             						str2 = data4.slice(0,data4.lastIndexOf(">" + house_districts[j][0] + "-"));
							str3 = str2.slice(str2.lastIndexOf('<div class="ratings-detail-page-table-7-column">'),str2.length);
							str4 = str3.slice(str3.indexOf('<p class="ratings-detail-page-table-7-column-cell-title">'),str3.length);
							str5 = '';
							if(str4.split('<ul class="ratings-detail-page-table-7-column-ul">').length-1 >= 2) {
								str5 = str4.slice(str4.lastIndexOf('<p class="ratings-detail-page-table-7-column-cell-title">'),str4.lastIndexOf('</p>'));
							} else {
								str5 = str4.slice(0,str4.indexOf('</p>'));
							}
							str6 = str5.slice(str5.lastIndexOf("\">")+2,str5.length);
							
							if(str6 == "SOLID R") {
								solidR.push(house_districts[j][0] + "-" + i);
							} else {
								if(str6 == "LIKELY R") {
									likelyR.push(house_districts[j][0] + "-" + i);
								} else {
									if(str6 == "LEAN R") {
										leanR.push(house_districts[j][0] + "-" + i);
									} else {
										if(str6 == "TOSS UP") {
												tossup.push(house_districts[j][0] + "-" + i);
										} else {
											if(str6 == "LEAN D") {
												leanD.push(house_districts[j][0] + "-" + i);
											} else {
												if(str6 == "LIKELY D") {
													likelyD.push(house_districts[j][0] + "-" + i);
												} else {
													if(str6 == "SOLID D") {
														solidD.push(house_districts[j][0] + "-" + i);
													}
												}												}
											}
										}
									}
								}
							}
						}
					}
					
					strSolidR = "['" + solidR.join("','") + "']" ;
					strLikelyR = "['" + likelyR.join("','") + "']";
					strLeanR = "['" + leanR.join("','") + "']";
					strTossup = "['" + tossup.join("','") + "']";
					strLeanD = "['" + leanD.join("','") + "']";
					strLikelyD = "['" + likelyD.join("','") + "']";
					strSolidD = "['" + solidD.join("','") + "']";
	
					fs.access("house_districts.js",fs.constants.W_OK,function(err) {
						if(!err) {
							fs.writeFile("house_districts.js",
								     "//<script> \n" +
								     "(function() { \n" +
								     "solidR = " + strSolidR + ",\n" +
								     "likelyR = " + strLikelyR + ",\n" +
							 	    "leanR = " + strLeanR + ",\n" +
								     "tossup = " + strTossup + ",\n" +
								     "leanD = " + strLeanD + ",\n" +
								     "likelyD = " + strLikelyD + ",\n" +
								     "solidD = " + strSolidD + "\n" +
								     "})(); \n" +
								     "//</script> \n",
								     function(errrr) {
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

house_races_download();
setInterval(house_races_download,300000);

http.createServer(function (req, res) {
	if(req.url != '/') {
		if(req.url.substring(0,6) == '/index') {
			res.writeHead(302, {'Location': '/','Content-Type': 'text/html'});
			res.write("<html><body style='font-family:Verdana;font-size:5vw;font-weight:bold;'>302<br>Redirecting to <a href=\"/\">here</a></body></html>", function() {
				res.end();
			});
		} else {
			path = req.url.substring(1,req.length);
			fs.access(path,fs.constants.R_OK,function(err) {
				if(!err) {
					fs.readFile(path,function(err2,data) {
						if(!err2) {
							res.writeHead(200, {'Content-Type': ('text/' + req.url.slice(req.url.lastIndexOf('.')+1,req.url.length))});
							res.write(data,function() {
								res.end();
							});
						} else {
							res.writeHead(500, {'Content-Type': 'text/html'});
							res.write("<html><body style='font-family:Verdana;font-size:5vw;font-weight:bold;'>500<br>Internal Server Error<br><br>" + err + "</body></html>", function() {
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
