// index.js

var http = require('http');
var https = require('https');
var fs = require('fs');
var port = process.env.PORT || 8080;

var house_districts = [['AL', 7],['AK', 0],['AZ', 9],['AR', 4],['CA', 53],['CO', 7],['CT', 5],['DE', 0],['FL',27],['GA',14],['HI',2],['ID',2],['IL',18],['IN',9],['IA',4],['KS',4],['KY',6],['LA',6],['ME',2],['MD',8],['MA',9],['MI',14],['MN',8],['MS',4],['MO',8],['MT',0],['NE',3],['NV',4],['NH',2],['NJ',12],['NM',3],['NY',27],['NC',13],['ND',0],['OH',16],['OK',5],['OR',5],['PA',18],['RI',2],['SC',7],['SD',0],['TN',9],['TX',36],['UT',4],['VT',0],['VA',11],['WA',10],['WV',3],['WI',8],['WY',0]]

http.createServer(function (req, res) {
	if(req.url != "/") {
		res.writeHead(302, {'Location': '/','Content-Type': 'text/plain'});
		res.write("Redirecting to <a href=\"/\">here</a>");
	} else {
		fs.readFile('house_of_reps.svg', function(err, data) {
			fs.readFile('jsbundle.html',function(err2,data2) {
				https.get('https://www.cookpolitical.com/ratings/house-race-ratings', function(resp) {
					data3 = '';
					resp.on('data',function(chunk) {
						data3 += chunk;
					});
					resp.on('end',function() {
						solidR = [];
						likelyR = [];
						leanR = [];
						tossup = [];
						leanD = [];
						likelyD = [];
						solidD = [];
						
						for(j = 0;j < house_districts.length;j++) {
							if(house_districts[j][1] == 0) {
								str2 = data3.slice(0,data3.lastIndexOf(house_districts[j][0] + "-AL"));
								str3 = str2.slice(0,str2.lastIndexOf("</p>"));
								str4 = str3.slice(str3.lastIndexOf("solid-seats-modal-in-title"),str3.length);
								str5 = str4.slice(str4.lastIndexOf(">")+1,str4.length);
								console.log(house_districts[j][0] + "-AL: " + str5);
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
							} else {
								for(i = 1;i <= house_districts[j][1];i++) {
									if(i < 10) { i = "0" + i } 
									str2 = data3.slice(0,data3.lastIndexOf(house_districts[j][0] + "-" + i));
									str3 = str2.slice(0,str2.lastIndexOf("</p>"));
									str4 = str3.slice(str3.lastIndexOf("solid-seats-modal-in-title"),str3.length);
									str5 = str4.slice(str4.lastIndexOf(">")+1,str4.length);
									console.log(house_districts[j][0] + "-" + i + ": " + str5);
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
								}
							}
						}
						res.writeHead(200, {'Content-Type': 'text/html'});
						strSolidR = "['" + solidR.join("','") + "']" ;
						strLikelyR = "['" + likelyR.join("','") + "']";
						strLeanR = "['" + leanR.join("','") + "']";
						strTossup = "['" + tossup.join("','") + "']";
						strLeanD = "['" + leanD.join("','") + "']";
						strLikelyD = "['" + likelyD.join("','") + "']";
						strSolidD = "['" + solidD.join("','") + "']";
						res.write("<html><head><script> solidR = " + strSolidR + "\n likelyR = " + strLikelyR + "\n leanR = " + strLeanR + "\n tossup = " + strTossup + "\n leanD = " + strLeanD + "\n likelyD = " + strLikelyD + "\n solidD = " + strSolidD + "\n\n </script>" + data2 + data);
						res.end();
					});
				});
			});
		});
	}
}).listen(port);
